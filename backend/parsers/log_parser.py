import re
from datetime import datetime, timedelta
from collections import defaultdict, Counter
import logging

class LogParser:
    def __init__(self):
        self.logger = logging.getLogger(__name__)
        
        # Regex patterns for different event types
        self.patterns = {
            'timestamp': r'(\d{1,2})/(\d{1,2}) (\d{1,2}):(\d{2}):(\d{2})\.(\d{3})',
            'damage': r'(\w+) (?:hits|crits) (\w+) for (\d+)',
            'heal': r'(\w+) (?:heals|crits) (\w+) for (\d+)',
            'death': r'(\w+) dies',
            'buff': r'(\w+) gains (\w+)',
            'debuff': r'(\w+) is afflicted by (\w+)',
            'encounter_start': r'ENCOUNTER_START,(\d+),(\w+),',
            'encounter_end': r'ENCOUNTER_END,(\d+),(\w+),(\d+),(\d+)',
            'player_info': r'(\w+)-(\w+)',
        }
        
        # Class and spec mappings
        self.class_specs = {
            'Warrior': ['Arms', 'Fury', 'Protection'],
            'Paladin': ['Holy', 'Protection', 'Retribution'],
            'Hunter': ['Beast Mastery', 'Marksmanship', 'Survival'],
            'Rogue': ['Assassination', 'Combat', 'Subtlety'],
            'Priest': ['Discipline', 'Holy', 'Shadow'],
            'Shaman': ['Elemental', 'Enhancement', 'Restoration'],
            'Mage': ['Arcane', 'Fire', 'Frost'],
            'Warlock': ['Affliction', 'Demonology', 'Destruction'],
            'Druid': ['Balance', 'Feral', 'Restoration'],
            'Death Knight': ['Blood', 'Frost', 'Unholy'],
        }
    
    def parse_file(self, filepath):
        """Parse a combat log file and return structured data"""
        try:
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                lines = f.readlines()
            
            # Initialize data structures
            events = []
            players = {}
            encounters = []
            current_encounter = None
            
            # Track timing
            start_time = None
            end_time = None
            
            for line_num, line in enumerate(lines, 1):
                line = line.strip()
                if not line:
                    continue
                
                # Parse timestamp
                timestamp = self._parse_timestamp(line)
                if timestamp:
                    if start_time is None:
                        start_time = timestamp
                    end_time = timestamp
                
                # Parse different event types
                event = self._parse_event(line, timestamp)
                if event:
                    events.append(event)
                    
                    # Track players
                    if event.get('source_name'):
                        self._track_player(players, event['source_name'])
                    if event.get('target_name'):
                        self._track_player(players, event['target_name'])
                    
                    # Track encounters
                    if event.get('event_type') == 'ENCOUNTER_START':
                        current_encounter = {
                            'name': event.get('encounter_name', 'Unknown'),
                            'encounter_id': event.get('encounter_id'),
                            'start_time': timestamp,
                            'events': []
                        }
                    elif event.get('event_type') == 'ENCOUNTER_END':
                        if current_encounter:
                            current_encounter['end_time'] = timestamp
                            current_encounter['duration'] = (timestamp - current_encounter['start_time']).total_seconds()
                            encounters.append(current_encounter)
                            current_encounter = None
                    elif current_encounter:
                        current_encounter['events'].append(event)
            
            # Calculate duration
            duration = 0
            if start_time and end_time:
                duration = (end_time - start_time).total_seconds()
            
            return {
                'total_events': len(events),
                'duration': int(duration),
                'players_count': len(players),
                'encounters_count': len(encounters),
                'events': events,
                'players': players,
                'encounters': encounters,
                'start_time': start_time,
                'end_time': end_time
            }
            
        except Exception as e:
            self.logger.error(f"Error parsing file {filepath}: {str(e)}")
            raise
    
    def _parse_timestamp(self, line):
        """Parse timestamp from log line"""
        match = re.search(self.patterns['timestamp'], line)
        if match:
            month, day, hour, minute, second, millisecond = map(int, match.groups())
            # Assume current year if not specified
            year = datetime.now().year
            return datetime(year, month, day, hour, minute, second, millisecond * 1000)
        return None
    
    def _parse_event(self, line, timestamp):
        """Parse a single event from a log line"""
        if not timestamp:
            return None
        
        # Try to match different event patterns
        event = {
            'timestamp': timestamp,
            'raw_line': line
        }
        
        # Damage events
        damage_match = re.search(r'(\w+) (?:hits|crits) (\w+) for (\d+)(?: \((\d+)\))?', line)
        if damage_match:
            source, target, damage, overheal = damage_match.groups()
            event.update({
                'event_type': 'DAMAGE',
                'source_name': source,
                'target_name': target,
                'value': int(damage),
                'overheal': int(overheal) if overheal else 0,
                'critical': 'crits' in line
            })
            return event
        
        # Healing events
        heal_match = re.search(r'(\w+) (?:heals|crits) (\w+) for (\d+)(?: \((\d+)\))?', line)
        if heal_match:
            source, target, healing, overheal = heal_match.groups()
            event.update({
                'event_type': 'HEAL',
                'source_name': source,
                'target_name': target,
                'value': int(healing),
                'overheal': int(overheal) if overheal else 0,
                'critical': 'crits' in line
            })
            return event
        
        # Death events
        death_match = re.search(r'(\w+) dies', line)
        if death_match:
            target = death_match.group(1)
            event.update({
                'event_type': 'DEATH',
                'target_name': target
            })
            return event
        
        # Buff events
        buff_match = re.search(r'(\w+) gains (\w+)', line)
        if buff_match:
            target, buff = buff_match.groups()
            event.update({
                'event_type': 'BUFF',
                'target_name': target,
                'ability_name': buff
            })
            return event
        
        # Debuff events
        debuff_match = re.search(r'(\w+) is afflicted by (\w+)', line)
        if debuff_match:
            target, debuff = debuff_match.groups()
            event.update({
                'event_type': 'DEBUFF',
                'target_name': target,
                'ability_name': debuff
            })
            return event
        
        # Encounter events
        if 'ENCOUNTER_START' in line:
            match = re.search(r'ENCOUNTER_START,(\d+),(\w+),', line)
            if match:
                encounter_id, encounter_name = match.groups()
                event.update({
                    'event_type': 'ENCOUNTER_START',
                    'encounter_id': int(encounter_id),
                    'encounter_name': encounter_name
                })
                return event
        
        if 'ENCOUNTER_END' in line:
            match = re.search(r'ENCOUNTER_END,(\d+),(\w+),(\d+),(\d+)', line)
            if match:
                encounter_id, encounter_name, success, duration = match.groups()
                event.update({
                    'event_type': 'ENCOUNTER_END',
                    'encounter_id': int(encounter_id),
                    'encounter_name': encounter_name,
                    'success': int(success) == 1,
                    'duration': int(duration)
                })
                return event
        
        # If no specific pattern matches, mark as unknown
        event['event_type'] = 'UNKNOWN'
        return event
    
    def _track_player(self, players, player_name):
        """Track player information"""
        if player_name not in players:
            players[player_name] = {
                'name': player_name,
                'class_name': self._guess_class(player_name),
                'spec': None,
                'role': None,
                'total_damage': 0,
                'total_healing': 0,
                'total_damage_taken': 0,
                'deaths': 0,
                'kills': 0,
                'buffs_applied': 0,
                'debuffs_applied': 0
            }
    
    def _guess_class(self, player_name):
        """Try to guess player class based on name patterns"""
        # This is a simple heuristic - in a real implementation,
        # you'd want to parse class information from the log
        name_lower = player_name.lower()
        
        # Simple class detection based on common naming patterns
        if any(word in name_lower for word in ['war', 'berserk', 'rage']):
            return 'Warrior'
        elif any(word in name_lower for word in ['pala', 'holy', 'light']):
            return 'Paladin'
        elif any(word in name_lower for word in ['hunt', 'beast', 'arrow']):
            return 'Hunter'
        elif any(word in name_lower for word in ['rogue', 'stealth', 'shadow']):
            return 'Rogue'
        elif any(word in name_lower for word in ['priest', 'holy', 'shadow']):
            return 'Priest'
        elif any(word in name_lower for word in ['shaman', 'totem', 'spirit']):
            return 'Shaman'
        elif any(word in name_lower for word in ['mage', 'fire', 'frost', 'arcane']):
            return 'Mage'
        elif any(word in name_lower for word in ['warlock', 'demon', 'curse']):
            return 'Warlock'
        elif any(word in name_lower for word in ['druid', 'nature', 'wild']):
            return 'Druid'
        elif any(word in name_lower for word in ['death', 'unholy', 'blood']):
            return 'Death Knight'
        else:
            return 'Unknown'
    
    def store_parsed_data(self, log_id, log_data, db):
        """Store parsed data in the database"""
        try:
            # Store players
            for player_data in log_data['players'].values():
                player = Player(
                    log_id=log_id,
                    name=player_data['name'],
                    class_name=player_data['class_name'],
                    spec=player_data['spec'],
                    role=player_data['role'],
                    total_damage=player_data['total_damage'],
                    total_healing=player_data['total_healing'],
                    total_damage_taken=player_data['total_damage_taken'],
                    deaths=player_data['deaths'],
                    kills=player_data['kills'],
                    buffs_applied=player_data['buffs_applied'],
                    debuffs_applied=player_data['debuffs_applied']
                )
                db.session.add(player)
            
            # Store encounters
            for encounter_data in log_data['encounters']:
                encounter = Encounter(
                    log_id=log_id,
                    name=encounter_data['name'],
                    encounter_id=encounter_data.get('encounter_id'),
                    start_time=encounter_data['start_time'],
                    end_time=encounter_data['end_time'],
                    duration=encounter_data['duration'],
                    success=encounter_data.get('success', False)
                )
                db.session.add(encounter)
            
            # Store events (limit to first 10000 to avoid memory issues)
            events_to_store = log_data['events'][:10000]
            for event_data in events_to_store:
                event = Event(
                    log_id=log_id,
                    timestamp=event_data['timestamp'],
                    event_type=event_data['event_type'],
                    source_name=event_data.get('source_name'),
                    target_name=event_data.get('target_name'),
                    ability_name=event_data.get('ability_name'),
                    value=event_data.get('value', 0),
                    overheal=event_data.get('overheal', 0),
                    critical=event_data.get('critical', False)
                )
                db.session.add(event)
            
            db.session.commit()
            
        except Exception as e:
            db.session.rollback()
            self.logger.error(f"Error storing parsed data: {str(e)}")
            raise