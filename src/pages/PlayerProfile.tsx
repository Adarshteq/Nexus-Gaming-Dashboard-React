import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { User, Star, Trophy, Target, Calendar, Settings } from 'lucide-react';

const PlayerProfile = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20"></div>
      </div>

      <div className="relative z-10 flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <User size={64} className="text-white" />
              </motion.div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                Player One
              </h1>
              <p className="text-2xl text-purple-300 mb-4">Level 42</p>
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Trophy className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Tournaments Won</h3>
                <p className="text-3xl font-bold text-yellow-400">24</p>
                <p className="text-gray-400 text-sm mt-2">+3 this month</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Target className="text-green-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Win Rate</h3>
                <p className="text-3xl font-bold text-green-400">78%</p>
                <p className="text-gray-400 text-sm mt-2">193 of 247 matches</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Calendar className="text-blue-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Days Active</h3>
                <p className="text-3xl font-bold text-blue-400">156</p>
                <p className="text-gray-400 text-sm mt-2">Join date: Jan 2023</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Settings className="text-pink-400 mb-4" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2">Rank</h3>
                <p className="text-3xl font-bold text-pink-400">#247</p>
                <p className="text-gray-400 text-sm mt-2">Global ranking</p>
              </motion.div>
            </div>

            {/* Detailed Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Achievements */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Recent Achievements</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Tournament Victor', desc: 'Won Cyber Championship 2024', icon: Trophy },
                    { title: 'Streak Master', desc: '15 consecutive wins', icon: Target },
                    { title: 'Rising Star', desc: 'Reached Level 42', icon: Star },
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <achievement.icon className="text-purple-400" size={24} />
                      <div>
                        <h3 className="text-white font-semibold">{achievement.title}</h3>
                        <p className="text-gray-400 text-sm">{achievement.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Performance Chart */}
              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Performance Overview</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Accuracy</span>
                      <span>84%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '84%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Consistency</span>
                      <span>91%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '91%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-white mb-2">
                      <span>Strategy</span>
                      <span>76%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '76%' }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex justify-center space-x-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit Profile
              </motion.button>
              <motion.button
                className="bg-gray-700 text-white px-8 py-3 rounded-lg font-medium border border-gray-600"
                whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
                whileTap={{ scale: 0.95 }}
              >
                View Stats
              </motion.button>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default PlayerProfile;