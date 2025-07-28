from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
from datetime import datetime
import uuid
from werkzeug.utils import secure_filename

# Import our modules
from models.log import Log
from models.player import Player
from models.event import Event
from models.encounter import Encounter
from parsers.log_parser import LogParser
from utils.stats_calculator import StatsCalculator

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database/warcraftlogs.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = '../logs/uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs('../database', exist_ok=True)

db = SQLAlchemy(app)

# Initialize database
with app.app_context():
    db.create_all()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'timestamp': datetime.utcnow().isoformat()})

@app.route('/api/upload', methods=['POST'])
def upload_log():
    """Upload and parse a combat log file"""
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if not file.filename.endswith('.txt'):
        return jsonify({'error': 'Only .txt files are supported'}), 400
    
    # Generate unique filename
    filename = secure_filename(file.filename)
    unique_filename = f"{uuid.uuid4()}_{filename}"
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], unique_filename)
    
    try:
        # Save file
        file.save(filepath)
        
        # Parse the log file
        parser = LogParser()
        log_data = parser.parse_file(filepath)
        
        # Create log record
        log = Log(
            filename=filename,
            filepath=filepath,
            upload_date=datetime.utcnow(),
            total_events=log_data['total_events'],
            duration=log_data['duration'],
            players_count=log_data['players_count'],
            encounters_count=log_data['encounters_count']
        )
        
        db.session.add(log)
        db.session.commit()
        
        # Store parsed data
        parser.store_parsed_data(log.id, log_data, db)
        
        return jsonify({
            'message': 'Log uploaded successfully',
            'log_id': log.id,
            'filename': filename,
            'stats': {
                'total_events': log_data['total_events'],
                'duration': log_data['duration'],
                'players_count': log_data['players_count'],
                'encounters_count': log_data['encounters_count']
            }
        }), 201
        
    except Exception as e:
        # Clean up file if parsing fails
        if os.path.exists(filepath):
            os.remove(filepath)
        return jsonify({'error': f'Failed to process log: {str(e)}'}), 500

@app.route('/api/logs', methods=['GET'])
def get_logs():
    """Get list of all uploaded logs"""
    logs = Log.query.order_by(Log.upload_date.desc()).all()
    
    return jsonify([{
        'id': log.id,
        'filename': log.filename,
        'upload_date': log.upload_date.isoformat(),
        'total_events': log.total_events,
        'duration': log.duration,
        'players_count': log.players_count,
        'encounters_count': log.encounters_count
    } for log in logs])

@app.route('/api/logs/<int:log_id>', methods=['GET'])
def get_log_details(log_id):
    """Get detailed information about a specific log"""
    log = Log.query.get_or_404(log_id)
    
    return jsonify({
        'id': log.id,
        'filename': log.filename,
        'upload_date': log.upload_date.isoformat(),
        'total_events': log.total_events,
        'duration': log.duration,
        'players_count': log.players_count,
        'encounters_count': log.encounters_count
    })

@app.route('/api/logs/<int:log_id>/stats', methods=['GET'])
def get_log_stats(log_id):
    """Get comprehensive statistics for a log"""
    log = Log.query.get_or_404(log_id)
    calculator = StatsCalculator()
    
    stats = calculator.calculate_log_stats(log_id, db)
    return jsonify(stats)

@app.route('/api/logs/<int:log_id>/players', methods=['GET'])
def get_log_players(log_id):
    """Get all players from a log"""
    players = Player.query.filter_by(log_id=log_id).all()
    
    return jsonify([{
        'id': player.id,
        'name': player.name,
        'class_name': player.class_name,
        'spec': player.spec,
        'role': player.role,
        'total_damage': player.total_damage,
        'total_healing': player.total_healing,
        'deaths': player.deaths
    } for player in players])

@app.route('/api/logs/<int:log_id>/encounters', methods=['GET'])
def get_log_encounters(log_id):
    """Get all encounters from a log"""
    encounters = Encounter.query.filter_by(log_id=log_id).all()
    
    return jsonify([{
        'id': encounter.id,
        'name': encounter.name,
        'start_time': encounter.start_time.isoformat() if encounter.start_time else None,
        'end_time': encounter.end_time.isoformat() if encounter.end_time else None,
        'duration': encounter.duration,
        'success': encounter.success
    } for encounter in encounters])

@app.route('/api/logs/<int:log_id>/events', methods=['GET'])
def get_log_events(log_id):
    """Get events from a log with optional filtering"""
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 100, type=int)
    event_type = request.args.get('type')
    player_name = request.args.get('player')
    
    query = Event.query.filter_by(log_id=log_id)
    
    if event_type:
        query = query.filter_by(event_type=event_type)
    if player_name:
        query = query.filter(Event.source_name.contains(player_name) | Event.target_name.contains(player_name))
    
    events = query.order_by(Event.timestamp.desc()).paginate(
        page=page, per_page=per_page, error_out=False
    )
    
    return jsonify({
        'events': [{
            'id': event.id,
            'timestamp': event.timestamp.isoformat(),
            'event_type': event.event_type,
            'source_name': event.source_name,
            'target_name': event.target_name,
            'ability_name': event.ability_name,
            'value': event.value,
            'overheal': event.overheal,
            'absorbed': event.absorbed,
            'resisted': event.resisted,
            'blocked': event.blocked,
            'critical': event.critical
        } for event in events.items],
        'pagination': {
            'page': page,
            'per_page': per_page,
            'total': events.total,
            'pages': events.pages
        }
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)