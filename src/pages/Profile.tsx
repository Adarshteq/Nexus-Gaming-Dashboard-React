import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { User, Settings, Trophy, Calendar, Star } from 'lucide-react';

const Profile = () => {
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
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
              Profile
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <motion.div
                className="lg:col-span-1 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User size={48} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Player One</h2>
                  <p className="text-purple-300 mb-4">Level 42</p>
                  <div className="flex justify-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <Trophy className="text-purple-400 mb-2" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">Achievements</h3>
                  <p className="text-3xl font-bold text-purple-400">24</p>
                </motion.div>

                <motion.div
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <Calendar className="text-pink-400 mb-2" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">Days Active</h3>
                  <p className="text-3xl font-bold text-pink-400">156</p>
                </motion.div>

                <motion.div
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <Settings className="text-blue-400 mb-2" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">Games Played</h3>
                  <p className="text-3xl font-bold text-blue-400">1,247</p>
                </motion.div>

                <motion.div
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                  whileHover={{ scale: 1.02 }}
                >
                  <Star className="text-yellow-400 mb-2" size={24} />
                  <h3 className="text-lg font-semibold text-white mb-2">Win Rate</h3>
                  <p className="text-3xl font-bold text-yellow-400">78%</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Profile;