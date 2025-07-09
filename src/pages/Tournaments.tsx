import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Trophy, Calendar, Star, Target } from 'lucide-react';

const Tournaments = () => {
  const tournaments = [
    { id: 1, name: 'Cyber Championship 2024', status: 'Live', prize: '$50,000', participants: 128, position: 3 },
    { id: 2, name: 'Neon Masters', status: 'Upcoming', prize: '$25,000', participants: 64, position: null },
    { id: 3, name: 'Shadow League', status: 'Completed', prize: '$10,000', participants: 32, position: 1 },
    { id: 4, name: 'Elite Showdown', status: 'Completed', prize: '$75,000', participants: 256, position: 8 },
  ];

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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
              Tournaments
            </h1>

            {/* Tournament Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Trophy className="text-purple-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">Tournaments Won</h3>
                <p className="text-3xl font-bold text-purple-400">12</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Target className="text-green-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">Total Participated</h3>
                <p className="text-3xl font-bold text-green-400">48</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Star className="text-yellow-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">Top 3 Finishes</h3>
                <p className="text-3xl font-bold text-yellow-400">28</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Calendar className="text-pink-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">Prize Money</h3>
                <p className="text-3xl font-bold text-pink-400">$247K</p>
              </motion.div>
            </div>

            {/* Tournament List */}
            <div className="space-y-6">
              {tournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.id}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
                      <div className="flex items-center space-x-4 text-gray-300">
                        <span>Prize Pool: {tournament.prize}</span>
                        <span>•</span>
                        <span>{tournament.participants} Players</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tournament.status === 'Live' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : tournament.status === 'Upcoming'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {tournament.status}
                      </span>
                      {tournament.position && (
                        <p className="text-yellow-400 font-bold mt-2">#{tournament.position}</p>
                      )}
                    </div>
                  </div>
                  
                  {tournament.status === 'Upcoming' && (
                    <motion.button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Register Now
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Tournaments;