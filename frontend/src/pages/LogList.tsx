import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Users, Clock, FileText } from 'lucide-react';
import axios from 'axios';

interface Log {
  id: number;
  filename: string;
  upload_date: string;
  total_events: number;
  duration: number;
  players_count: number;
  encounters_count: number;
}

const LogList: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'recent' | 'large'>('all');

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await axios.get('/api/logs');
      setLogs(response.data);
    } catch (error) {
      console.error('Failed to fetch logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.filename.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesFilter = true;
    if (filter === 'recent') {
      const uploadDate = new Date(log.upload_date);
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      matchesFilter = uploadDate > oneWeekAgo;
    } else if (filter === 'large') {
      matchesFilter = log.total_events > 1000;
    }

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wow-blue"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Combat Logs</h1>
        <Link
          to="/upload"
          className="bg-wow-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
        >
          <FileText className="h-5 w-5" />
          <span>Upload New Log</span>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search logs by filename..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-wow-blue"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-wow-blue text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('recent')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'recent'
                  ? 'bg-wow-blue text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setFilter('large')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === 'large'
                  ? 'bg-wow-blue text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Large Logs
            </button>
          </div>
        </div>
      </div>

      {/* Logs Grid */}
      {filteredLogs.length === 0 ? (
        <div className="text-center py-12">
          <FileText className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">
            {logs.length === 0 ? 'No logs uploaded yet' : 'No logs match your search'}
          </h3>
          <p className="text-gray-500 mb-6">
            {logs.length === 0 
              ? 'Upload your first combat log to get started'
              : 'Try adjusting your search terms or filters'
            }
          </p>
          {logs.length === 0 && (
            <Link
              to="/upload"
              className="bg-wow-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Upload Your First Log
            </Link>
          )}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLogs.map((log) => (
            <Link
              key={log.id}
              to={`/logs/${log.id}`}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-wow-blue transition-colors duration-200 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white truncate">
                  {log.filename}
                </h3>
                <span className="text-sm text-gray-400">
                  #{log.id}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{formatDate(log.upload_date)}</span>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{formatDuration(log.duration)}</span>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{log.players_count} players</span>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <FileText className="h-4 w-4 mr-2" />
                  <span className="text-sm">{log.total_events.toLocaleString()} events</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Encounters:</span>
                  <span className="text-wow-gold font-semibold">{log.encounters_count}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogList;