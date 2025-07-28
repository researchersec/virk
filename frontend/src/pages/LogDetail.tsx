import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart3, Users, Clock, Sword, Heart, Skull, TrendingUp } from 'lucide-react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

interface LogStats {
  overview: {
    total_events: number;
    total_damage: number;
    total_healing: number;
    total_deaths: number;
    players_count: number;
    encounters_count: number;
    duration_minutes: number;
  };
  players: any[];
  encounters: any[];
  timeline: any[];
  abilities: any[];
  classes: any[];
}

const LogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [stats, setStats] = useState<LogStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'encounters' | 'timeline'>('overview');

  useEffect(() => {
    if (id) {
      fetchLogStats();
    }
  }, [id]);

  const fetchLogStats = async () => {
    try {
      const response = await axios.get(`/api/logs/${id}/stats`);
      setStats(response.data);
    } catch (error) {
      console.error('Failed to fetch log stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.floor(minutes % 60);
    if (hours > 0) {
      return `${hours}h ${remainingMinutes}m`;
    }
    return `${remainingMinutes}m`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wow-blue"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Log Not Found</h2>
        <p className="text-gray-400">The requested log could not be found.</p>
      </div>
    );
  }

  const timelineData = {
    labels: stats.timeline.map((item: any) => `${item.minute}m`),
    datasets: [
      {
        label: 'Damage',
        data: stats.timeline.map((item: any) => item.damage),
        borderColor: '#C41E3A',
        backgroundColor: 'rgba(196, 30, 58, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Healing',
        data: stats.timeline.map((item: any) => item.healing),
        borderColor: '#00FF00',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const playerDamageData = {
    labels: stats.players.slice(0, 10).map((player: any) => player.name),
    datasets: [
      {
        label: 'Damage',
        data: stats.players.slice(0, 10).map((player: any) => player.total_damage),
        backgroundColor: '#C41E3A',
      },
      {
        label: 'Healing',
        data: stats.players.slice(0, 10).map((player: any) => player.total_healing),
        backgroundColor: '#00FF00',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
        },
      },
      title: {
        display: true,
        text: 'Combat Timeline',
        color: '#ffffff',
      },
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: '#374151' },
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: '#374151' },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Log Analysis</h1>
        
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center">
              <Sword className="h-6 w-6 text-wow-red mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">{formatNumber(stats.overview.total_damage)}</div>
                <div className="text-sm text-gray-400">Total Damage</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-wow-green mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">{formatNumber(stats.overview.total_healing)}</div>
                <div className="text-sm text-gray-400">Total Healing</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center">
              <Users className="h-6 w-6 text-wow-blue mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">{stats.overview.players_count}</div>
                <div className="text-sm text-gray-400">Players</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-wow-gold mr-2" />
              <div>
                <div className="text-2xl font-bold text-white">{formatDuration(stats.overview.duration_minutes)}</div>
                <div className="text-sm text-gray-400">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg p-1 mb-6">
        <div className="flex space-x-1">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'players', label: 'Players', icon: Users },
            { id: 'encounters', label: 'Encounters', icon: Sword },
            { id: 'timeline', label: 'Timeline', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-wow-blue text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Timeline</h3>
                <Line data={timelineData} options={chartOptions} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Top Players</h3>
                <Bar data={playerDamageData} options={chartOptions} />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Class Distribution</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {stats.classes.map((classData: any) => (
                  <div key={classData.class_name} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">{classData.class_name}</span>
                      <span className="text-wow-gold">{classData.count}</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div>Damage: {formatNumber(classData.total_damage)}</div>
                      <div>Healing: {formatNumber(classData.total_healing)}</div>
                      <div>Deaths: {classData.total_deaths}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'players' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Player Performance</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Player</th>
                    <th className="text-left py-2 text-gray-400">Class</th>
                    <th className="text-right py-2 text-gray-400">Damage</th>
                    <th className="text-right py-2 text-gray-400">Healing</th>
                    <th className="text-right py-2 text-gray-400">Deaths</th>
                    <th className="text-right py-2 text-gray-400">DPS</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.players.map((player: any) => (
                    <tr key={player.name} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="py-2 text-white">{player.name}</td>
                      <td className="py-2 text-gray-400">{player.class_name}</td>
                      <td className="py-2 text-right text-wow-red">{formatNumber(player.total_damage)}</td>
                      <td className="py-2 text-right text-wow-green">{formatNumber(player.total_healing)}</td>
                      <td className="py-2 text-right text-gray-400">{player.deaths}</td>
                      <td className="py-2 text-right text-wow-gold">
                        {formatNumber(Math.floor(player.total_damage / (stats.overview.duration_minutes * 60)))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'encounters' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Encounters</h3>
            {stats.encounters.length === 0 ? (
              <p className="text-gray-400">No encounters found in this log.</p>
            ) : (
              <div className="space-y-4">
                {stats.encounters.map((encounter: any) => (
                  <div key={encounter.name} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{encounter.name}</h4>
                      <span className={`px-2 py-1 rounded text-sm ${
                        encounter.success 
                          ? 'bg-green-900 text-green-400' 
                          : 'bg-red-900 text-red-400'
                      }`}>
                        {encounter.success ? 'Success' : 'Wipe'}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-400">
                      <div>Duration: {formatDuration(encounter.duration / 60)}</div>
                      <div>Damage: {formatNumber(encounter.total_damage)}</div>
                      <div>Healing: {formatNumber(encounter.total_healing)}</div>
                      <div>Deaths: {encounter.deaths}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'timeline' && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Combat Timeline</h3>
            <Line data={timelineData} options={chartOptions} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LogDetail;