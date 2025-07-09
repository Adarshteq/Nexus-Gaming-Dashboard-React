import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { Calendar, Clock, Target, Trophy } from 'lucide-react';

const Schedule = () => {
  const events = [
    { id: 1, title: 'Ranked Match vs Shadow Warrior', time: '14:00', date: 'Today', type: 'match' },
    { id: 2, title: 'Team Practice Session', time: '16:30', date: 'Today', type: 'practice' },
    { id: 3, title: 'Cyber Championship Qualifier', time: '19:00', date: 'Tomorrow', type: 'tournament' },
    { id: 4, title: 'Strategy Review Meeting', time: '10:00', date: 'Tomorrow', type: 'meeting' },
    { id: 5, title: 'Neon Masters Tournament', time: '15:00', date: 'Jan 20', type: 'tournament' },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'match': return <Target className="text-purple-400" size={20} />;
      case 'tournament': return <Trophy className="text-yellow-400" size={20} />;
      case 'practice': return <Clock className="text-blue-400" size={20} />;
      default: return <Calendar className="text-green-400" size={20} />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'match': return 'border-purple-500/30 bg-purple-500/10';
      case 'tournament': return 'border-yellow-500/30 bg-yellow-500/10';
      case 'practice': return 'border-blue-500/30 bg-blue-500/10';
      default: return 'border-green-500/30 bg-green-500/10';
    }
  };

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
              Schedule
            </h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Calendar className="text-purple-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">Today's Events</h3>
                <p className="text-3xl font-bold text-purple-400">2</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Clock className="text-pink-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">This Week</h3>
                <p className="text-3xl font-bold text-pink-400">8</p>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/30"
                whileHover={{ scale: 1.02 }}
              >
                <Trophy className="text-yellow-400 mb-2" size={24} />
                <h3 className="text-lg font-semibold text-white mb-2">Tournaments</h3>
                <p className="text-3xl font-bold text-yellow-400">3</p>
              </motion.div>
            </div>

            {/* Events List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">Upcoming Events</h2>
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className={`bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border ${getEventColor(event.type)}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getEventIcon(event.type)}
                      <div>
                        <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                        <p className="text-gray-400 capitalize">{event.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-medium">{event.time}</p>
                      <p className="text-gray-400">{event.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Add Event Button */}
            <motion.div
              className="mt-8 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-medium">
                Add New Event
              </button>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Schedule;