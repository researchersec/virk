from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Player(db.Model):
    __tablename__ = 'players'
    
    id = db.Column(db.Integer, primary_key=True)
    log_id = db.Column(db.Integer, db.ForeignKey('logs.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    class_name = db.Column(db.String(50))  # Warrior, Mage, etc.
    spec = db.Column(db.String(50))        # Arms, Fire, etc.
    role = db.Column(db.String(20))        # Tank, Healer, DPS
    level = db.Column(db.Integer, default=60)
    
    # Statistics
    total_damage = db.Column(db.BigInteger, default=0)
    total_healing = db.Column(db.BigInteger, default=0)
    total_damage_taken = db.Column(db.BigInteger, default=0)
    deaths = db.Column(db.Integer, default=0)
    kills = db.Column(db.Integer, default=0)
    
    # Buff/Debuff stats
    buffs_applied = db.Column(db.Integer, default=0)
    debuffs_applied = db.Column(db.Integer, default=0)
    
    # Time active
    time_active = db.Column(db.Integer, default=0)  # in seconds
    
    def __repr__(self):
        return f'<Player {self.name} ({self.class_name})>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'class_name': self.class_name,
            'spec': self.spec,
            'role': self.role,
            'level': self.level,
            'total_damage': self.total_damage,
            'total_healing': self.total_healing,
            'total_damage_taken': self.total_damage_taken,
            'deaths': self.deaths,
            'kills': self.kills,
            'buffs_applied': self.buffs_applied,
            'debuffs_applied': self.debuffs_applied,
            'time_active': self.time_active
        }