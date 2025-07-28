from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Event(db.Model):
    __tablename__ = 'events'
    
    id = db.Column(db.Integer, primary_key=True)
    log_id = db.Column(db.Integer, db.ForeignKey('logs.id'), nullable=False)
    timestamp = db.Column(db.DateTime, nullable=False)
    event_type = db.Column(db.String(50), nullable=False)  # DAMAGE, HEAL, DEATH, etc.
    
    # Source and target
    source_name = db.Column(db.String(100))
    source_guid = db.Column(db.String(100))
    target_name = db.Column(db.String(100))
    target_guid = db.Column(db.String(100))
    
    # Ability information
    ability_name = db.Column(db.String(100))
    ability_id = db.Column(db.Integer)
    
    # Event values
    value = db.Column(db.BigInteger, default=0)  # Damage/healing amount
    overheal = db.Column(db.BigInteger, default=0)
    absorbed = db.Column(db.BigInteger, default=0)
    resisted = db.Column(db.BigInteger, default=0)
    blocked = db.Column(db.BigInteger, default=0)
    
    # Flags
    critical = db.Column(db.Boolean, default=False)
    glancing = db.Column(db.Boolean, default=False)
    crushing = db.Column(db.Boolean, default=False)
    
    # Additional data
    school = db.Column(db.String(20))  # Physical, Fire, etc.
    power_type = db.Column(db.String(20))  # Rage, Energy, etc.
    
    def __repr__(self):
        return f'<Event {self.event_type} {self.source_name} -> {self.target_name}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat(),
            'event_type': self.event_type,
            'source_name': self.source_name,
            'source_guid': self.source_guid,
            'target_name': self.target_name,
            'target_guid': self.target_guid,
            'ability_name': self.ability_name,
            'ability_id': self.ability_id,
            'value': self.value,
            'overheal': self.overheal,
            'absorbed': self.absorbed,
            'resisted': self.resisted,
            'blocked': self.blocked,
            'critical': self.critical,
            'glancing': self.glancing,
            'crushing': self.crushing,
            'school': self.school,
            'power_type': self.power_type
        }