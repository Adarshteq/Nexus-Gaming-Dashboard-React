
import React from 'react';
import { motion } from 'framer-motion';
import { Play, User, Star, TrendingUp } from 'lucide-react';

const StreamerGrid = () => {
  const streamers = [
    {
      name: 'CyberNinja_X',
      game: 'Nexus Arena',
      viewers: '12.4K',
      isLive: true,
      rank: 'Diamond',
      avatar: '🥷',
      specialty: 'Assassin Main'
    },
    {
      name: 'QuantumGamer',
      game: 'Nexus Arena', 
      viewers: '8.7K',
      isLive: true,
      rank: 'Master',
      avatar: '⚡',
      specialty: 'Tank Specialist'
    },
    {
      name: 'PlasmaStrike',
      game: 'Nexus Arena',
      viewers: '15.2K',
      isLive: true,
      rank: 'Grandmaster',
      avatar: '🔥',
      specialty: 'Sniper Pro'
    },
    {
      name: 'VoidWalker',
      game: 'Nexus Arena',
      viewers: '6.3K',
      isLive: false,
      rank: 'Diamond',
      avatar: '🌌',
      specialty: 'Support Main'
    },
    {
      name: 'NeonRush',
      game: 'Nexus Arena',
      viewers: '9.8K',
      isLive: true,
      rank: 'Master',
      avatar: '⚡',
      specialty: 'Speed Runner'
    },
    {
      name: 'GlitchHunter',
      game: 'Nexus Arena',
      viewers: '11.1K',
      isLive: true,
      rank: 'Diamond',
      avatar: '🎯',
      specialty: 'Meta Breaker'
    }
  ];

  const getRankColor = (rank) => {
    switch (rank) {
      case 'Grandmaster': return 'from-red-400 to-orange-500';
      case 'Master': return 'from-purple-400 to-pink-500';
      case 'Diamond': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section className="ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
            Featured Streamers
          </h2>
          <p className="text-gray-400">Watch the best players dominate the arena</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streamers.map((streamer, index) => (
            <motion.div
              key={streamer.name}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)" 
              }}
            >
              {/* Live Badge */}
              {streamer.isLive && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-semibold">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  LIVE
                </div>
              )}

              {/* Streamer Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {streamer.avatar}
                  </div>
                  {streamer.isLive && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <Play size={10} className="text-gray-800 ml-0.5" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{streamer.name}</h3>
                  <p className="text-sm text-gray-400">{streamer.specialty}</p>
                </div>
              </div>

              {/* Game & Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Playing</span>
                  <span className="text-sm text-purple-400 font-semibold">{streamer.game}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Viewers</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={14} className="text-green-400" />
                    <span className="text-sm text-white font-semibold">{streamer.viewers}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Rank</span>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${getRankColor(streamer.rank)} bg-clip-text text-transparent`}>
                    {streamer.rank}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.button
                  className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    streamer.isLive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500'
                      : 'bg-gray-700/50 text-gray-400 border border-gray-600/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!streamer.isLive}
                >
                  {streamer.isLive ? 'Watch Now' : 'Offline'}
                </motion.button>
                
                <motion.button
                  className="p-2 bg-gray-700/50 hover:bg-purple-500/20 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Star size={16} className="text-gray-400 hover:text-purple-400" />
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamerGrid;
