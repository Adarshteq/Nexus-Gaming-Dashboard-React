import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Settings as SettingsIcon, User, Calendar } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [volume, setVolume] = useState(75);

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
              Settings
            </h1>

            {/* Profile Settings */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 mb-6"
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <User className="mr-2 text-purple-400" size={24} />
                Profile Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Player One"
                    className="w-full bg-gray-700/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="player.one@nexus.game"
                    className="w-full bg-gray-700/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>
            </motion.div>

            {/* Game Settings */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 mb-6"
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <SettingsIcon className="mr-2 text-purple-400" size={24} />
                Game Settings
              </h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white">Push Notifications</span>
                  <motion.button
                    className={`w-12 h-6 rounded-full ${notifications ? 'bg-purple-500' : 'bg-gray-600'} relative`}
                    onClick={() => setNotifications(!notifications)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full absolute top-0.5"
                      animate={{ x: notifications ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white">Auto-play Videos</span>
                  <motion.button
                    className={`w-12 h-6 rounded-full ${autoPlay ? 'bg-purple-500' : 'bg-gray-600'} relative`}
                    onClick={() => setAutoPlay(!autoPlay)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-white rounded-full absolute top-0.5"
                      animate={{ x: autoPlay ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>

                <div>
                  <label className="block text-white mb-2">Master Volume: {volume}%</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </motion.div>

            {/* Privacy Settings */}
            <motion.div
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30 mb-6"
              whileHover={{ scale: 1.01 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Calendar className="mr-2 text-purple-400" size={24} />
                Privacy & Security
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Profile Visibility</label>
                  <select className="w-full bg-gray-700/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400">
                    <option>Public</option>
                    <option>Friends Only</option>
                    <option>Private</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2">Match History</label>
                  <select className="w-full bg-gray-700/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400">
                    <option>Public</option>
                    <option>Friends Only</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Save Button */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium">
                Save Changes
              </button>
            </motion.div>
          </motion.div>
        </main>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Settings;