import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, BarChart3, Users, Sword } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Upload,
      title: 'Upload Logs',
      description: 'Upload your World of Warcraft combat logs for detailed analysis',
      color: 'text-wow-blue'
    },
    {
      icon: BarChart3,
      title: 'Detailed Statistics',
      description: 'View comprehensive damage, healing, and encounter statistics',
      color: 'text-wow-green'
    },
    {
      icon: Users,
      title: 'Player Analysis',
      description: 'Analyze individual player performance and contributions',
      color: 'text-wow-purple'
    },
    {
      icon: Sword,
      title: 'Encounter Tracking',
      description: 'Track boss encounters with success rates and timing',
      color: 'text-wow-orange'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6 font-wow">
          WarcraftLogs Clone
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Upload and analyze your World of Warcraft combat logs with detailed statistics, 
          player performance tracking, and encounter analysis.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/upload"
            className="bg-wow-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Log</span>
          </Link>
          <Link
            to="/logs"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
          >
            <BarChart3 className="h-5 w-5" />
            <span>View Logs</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-wow-blue transition-colors duration-200"
            >
              <div className={`${feature.color} mb-4`}>
                <Icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Platform Statistics
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-wow-gold mb-2">0</div>
            <div className="text-gray-400">Logs Uploaded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-wow-green mb-2">0</div>
            <div className="text-gray-400">Encounters Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-wow-blue mb-2">0</div>
            <div className="text-gray-400">Players Tracked</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;