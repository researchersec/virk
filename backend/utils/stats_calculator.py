from collections import defaultdict, Counter
from datetime import datetime, timedelta
import pandas as pd
import numpy as np

class StatsCalculator:
    def __init__(self):
        pass
    
    def calculate_log_stats(self, log_id, db):
        """Calculate comprehensive statistics for a log"""
        try:
            # Get all events for this log
            events = db.session.query(Event).filter_by(log_id=log_id).all()
            players = db.session.query(Player).filter_by(log_id=log_id).all()
            encounters = db.session.query(Encounter).filter_by(log_id=log_id).all()
            
            # Basic stats
            total_events = len(events)
            total_damage = sum(e.value for e in events if e.event_type == 'DAMAGE')
            total_healing = sum(e.value for e in events if e.event_type == 'HEAL')
            total_deaths = sum(1 for e in events if e.event_type == 'DEATH')
            
            # Player statistics
            player_stats = self._calculate_player_stats(events, players)
            
            # Encounter statistics
            encounter_stats = self._calculate_encounter_stats(encounters)
            
            # Damage/healing over time
            timeline_data = self._calculate_timeline_data(events)
            
            # Ability statistics
            ability_stats = self._calculate_ability_stats(events)
            
            # Class statistics
            class_stats = self._calculate_class_stats(players)
            
            return {
                'overview': {
                    'total_events': total_events,
                    'total_damage': total_damage,
                    'total_healing': total_healing,
                    'total_deaths': total_deaths,
                    'players_count': len(players),
                    'encounters_count': len(encounters),
                    'duration_minutes': self._get_log_duration(events) / 60
                },
                'players': player_stats,
                'encounters': encounter_stats,
                'timeline': timeline_data,
                'abilities': ability_stats,
                'classes': class_stats
            }
            
        except Exception as e:
            return {'error': f'Failed to calculate stats: {str(e)}'}
    
    def _calculate_player_stats(self, events, players):
        """Calculate detailed player statistics"""
        player_data = {}
        
        # Initialize player data
        for player in players:
            player_data[player.name] = {
                'name': player.name,
                'class_name': player.class_name,
                'spec': player.spec,
                'role': player.role,
                'total_damage': 0,
                'total_healing': 0,
                'total_damage_taken': 0,
                'deaths': 0,
                'kills': 0,
                'critical_hits': 0,
                'abilities_used': Counter(),
                'damage_by_ability': defaultdict(int),
                'healing_by_ability': defaultdict(int),
                'damage_taken_by_source': defaultdict(int),
                'timeline': defaultdict(int)
            }
        
        # Process events
        for event in events:
            if event.event_type == 'DAMAGE':
                if event.source_name in player_data:
                    player_data[event.source_name]['total_damage'] += event.value
                    player_data[event.source_name]['damage_by_ability'][event.ability_name or 'Unknown'] += event.value
                    if event.critical:
                        player_data[event.source_name]['critical_hits'] += 1
                
                if event.target_name in player_data:
                    player_data[event.target_name]['total_damage_taken'] += event.value
                    player_data[event.target_name]['damage_taken_by_source'][event.source_name or 'Unknown'] += event.value
            
            elif event.event_type == 'HEAL':
                if event.source_name in player_data:
                    player_data[event.source_name]['total_healing'] += event.value
                    player_data[event.source_name]['healing_by_ability'][event.ability_name or 'Unknown'] += event.value
            
            elif event.event_type == 'DEATH':
                if event.target_name in player_data:
                    player_data[event.target_name]['deaths'] += 1
            
            # Track ability usage
            if event.source_name in player_data and event.ability_name:
                player_data[event.source_name]['abilities_used'][event.ability_name] += 1
            
            # Track timeline data
            if event.source_name in player_data:
                minute = int(event.timestamp.minute)
                player_data[event.source_name]['timeline'][minute] += 1
        
        # Convert to list and sort by total damage
        player_list = list(player_data.values())
        player_list.sort(key=lambda x: x['total_damage'], reverse=True)
        
        return player_list
    
    def _calculate_encounter_stats(self, encounters):
        """Calculate encounter statistics"""
        encounter_data = []
        
        for encounter in encounters:
            encounter_data.append({
                'name': encounter.name,
                'duration': encounter.duration,
                'success': encounter.success,
                'total_damage': encounter.total_damage,
                'total_healing': encounter.total_healing,
                'players_participated': encounter.players_participated,
                'deaths': encounter.deaths,
                'start_time': encounter.start_time.isoformat() if encounter.start_time else None,
                'end_time': encounter.end_time.isoformat() if encounter.end_time else None
            })
        
        # Sort by duration (longest first)
        encounter_data.sort(key=lambda x: x['duration'], reverse=True)
        
        return encounter_data
    
    def _calculate_timeline_data(self, events):
        """Calculate timeline data for charts"""
        timeline = defaultdict(lambda: {
            'damage': 0,
            'healing': 0,
            'deaths': 0,
            'events': 0
        })
        
        for event in events:
            minute = int(event.timestamp.minute)
            
            if event.event_type == 'DAMAGE':
                timeline[minute]['damage'] += event.value
            elif event.event_type == 'HEAL':
                timeline[minute]['healing'] += event.value
            elif event.event_type == 'DEATH':
                timeline[minute]['deaths'] += 1
            
            timeline[minute]['events'] += 1
        
        # Convert to sorted list
        timeline_list = []
        for minute in sorted(timeline.keys()):
            timeline_list.append({
                'minute': minute,
                **timeline[minute]
            })
        
        return timeline_list
    
    def _calculate_ability_stats(self, events):
        """Calculate ability usage statistics"""
        ability_stats = defaultdict(lambda: {
            'total_damage': 0,
            'total_healing': 0,
            'usage_count': 0,
            'critical_hits': 0,
            'users': Counter()
        })
        
        for event in events:
            if event.ability_name:
                ability = ability_stats[event.ability_name]
                ability['usage_count'] += 1
                
                if event.source_name:
                    ability['users'][event.source_name] += 1
                
                if event.event_type == 'DAMAGE':
                    ability['total_damage'] += event.value
                    if event.critical:
                        ability['critical_hits'] += 1
                elif event.event_type == 'HEAL':
                    ability['total_healing'] += event.value
        
        # Convert to list and sort by total damage
        ability_list = []
        for ability_name, stats in ability_stats.items():
            ability_list.append({
                'name': ability_name,
                **stats,
                'top_users': stats['users'].most_common(5)
            })
        
        ability_list.sort(key=lambda x: x['total_damage'], reverse=True)
        
        return ability_list[:20]  # Top 20 abilities
    
    def _calculate_class_stats(self, players):
        """Calculate statistics by class"""
        class_stats = defaultdict(lambda: {
            'count': 0,
            'total_damage': 0,
            'total_healing': 0,
            'total_deaths': 0,
            'players': []
        })
        
        for player in players:
            class_name = player.class_name or 'Unknown'
            class_stats[class_name]['count'] += 1
            class_stats[class_name]['total_damage'] += player.total_damage
            class_stats[class_name]['total_healing'] += player.total_healing
            class_stats[class_name]['total_deaths'] += player.deaths
            class_stats[class_name]['players'].append({
                'name': player.name,
                'total_damage': player.total_damage,
                'total_healing': player.total_healing,
                'deaths': player.deaths
            })
        
        # Convert to list and sort by total damage
        class_list = []
        for class_name, stats in class_stats.items():
            class_list.append({
                'class_name': class_name,
                **stats
            })
        
        class_list.sort(key=lambda x: x['total_damage'], reverse=True)
        
        return class_list
    
    def _get_log_duration(self, events):
        """Calculate total log duration in seconds"""
        if not events:
            return 0
        
        timestamps = [event.timestamp for event in events]
        start_time = min(timestamps)
        end_time = max(timestamps)
        
        return (end_time - start_time).total_seconds()