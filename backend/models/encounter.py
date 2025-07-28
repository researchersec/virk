from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Encounter(db.Model):
    __tablename__ = 'encounters'
    
    id = db.Column(db.Integer, primary_key=True)
    log_id = db.Column(db.Integer, db.ForeignKey('logs.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    encounter_id = db.Column(db.Integer)  # WoW encounter ID
    
    # Timing
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    duration = db.Column(db.Integer, default=0)  # Duration in seconds
    
    # Result
    success = db.Column(db.Boolean, default=False)
    wipe_reason = db.Column(db.String(200))
    
    # Statistics
    total_damage = db.Column(db.BigInteger, default=0)
    total_healing = db.Column(db.BigInteger, default=0)
    total_damage_taken = db.Column(db.BigInteger, default=0)
    
    # Player counts
    players_participated = db.Column(db.Integer, default=0)
    deaths = db.Column(db.Integer, default=0)
    
    def __repr__(self):
        return f'<Encounter {self.name}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'encounter_id': self.encounter_id,
            'start_time': self.start_time.isoformat() if self.start_time else None,
            'end_time': self.end_time.isoformat() if self.end_time else None,
            'duration': self.duration,
            'success': self.success,
            'wipe_reason': self.wipe_reason,
            'total_damage': self.total_damage,
            'total_healing': self.total_healing,
            'total_damage_taken': self.total_damage_taken,
            'players_participated': self.players_participated,
            'deaths': self.deaths
        }