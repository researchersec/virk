from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Log(db.Model):
    __tablename__ = 'logs'
    
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(255), nullable=False)
    filepath = db.Column(db.String(500), nullable=False)
    upload_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    total_events = db.Column(db.Integer, default=0)
    duration = db.Column(db.Integer, default=0)  # Duration in seconds
    players_count = db.Column(db.Integer, default=0)
    encounters_count = db.Column(db.Integer, default=0)
    
    # Relationships
    players = db.relationship('Player', backref='log', lazy=True, cascade='all, delete-orphan')
    events = db.relationship('Event', backref='log', lazy=True, cascade='all, delete-orphan')
    encounters = db.relationship('Encounter', backref='log', lazy=True, cascade='all, delete-orphan')
    
    def __repr__(self):
        return f'<Log {self.filename}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'filename': self.filename,
            'upload_date': self.upload_date.isoformat(),
            'total_events': self.total_events,
            'duration': self.duration,
            'players_count': self.players_count,
            'encounters_count': self.encounters_count
        }