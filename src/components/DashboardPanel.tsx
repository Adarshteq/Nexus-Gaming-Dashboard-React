
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, TrendingUp } from 'lucide-react';

const DashboardPanel = () => {
  const stats = [
    { icon: Trophy, label: 'Wins', value: '1,247', change: '+5.2%', color: 'from-yellow-400 to-orange-500' },
    { icon: Target, label: 'Accuracy', value: '94.8%', change: '+2.1%', color: 'from-blue-400 to-purple-500' },
    { icon: Zap, label: 'K/D Ratio', value: '2.45', change: '+0.3%', color: 'from-green-400 to-emerald-500' },
    { icon: TrendingUp, label: 'Rank', value: 'Diamond', change: 'Up 2', color: 'from-purple-400 to-pink-500' },
  ];

  const featuredMatches = [
    { map: 'Cyber Plaza', mode: 'Ranked', result: 'Victory', score: '16-12' },
    { map: 'Neon District', mode: 'Competitive', result: 'Victory', score: '21-18' },
    { map: 'Tech Facility', mode: 'Ranked', result: 'Defeat', score: '14-16' },
  ];

  return (
    <section className="ml-64 p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
            Gaming Dashboard
          </h1>
          <p className="text-gray-400">Welcome back, ready to dominate?</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="group relative p-6 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)" 
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="text-sm text-green-400 font-semibold">{stat.change}</div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Character */}
          <motion.div
            className="lg:col-span-2 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 overflow-hidden relative"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Featured Character</h3>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <div className="text-4xl">⚡</div>
                </div>
                <div className="absolute inset-0 bg-purple-400/30 rounded-2xl blur-xl"></div>
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-2">Cyber Striker</h4>
                <p className="text-gray-400 mb-4">Elite assault specialist with enhanced mobility</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Level</span>
                    <span className="text-purple-400 font-semibold">45</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-purple-400 font-semibold">8,750 / 10,000</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Matches */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Recent Matches</h3>
            <div className="space-y-4">
              {featuredMatches.map((match, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-700/30 rounded-xl border border-purple-500/10 hover:border-purple-400/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-white">{match.map}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      match.result === 'Victory' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {match.result}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{match.mode}</span>
                    <span className="font-mono">{match.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPanel;
