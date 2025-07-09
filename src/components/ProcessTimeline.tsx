import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Star, Trophy, Target } from 'lucide-react';

const ProcessTimeline = () => {
  const processes = [
    {
      week: 1,
      title: 'Foundation Training',
      status: 'completed',
      icon: Check,
      description: 'Basic combat mechanics and movement',
      color: 'from-green-400 to-emerald-500'
    },
    {
      week: 2,
      title: 'Weapon Mastery',
      status: 'completed',
      icon: Target,
      description: 'Advanced weapon techniques',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      week: 3,
      title: 'Tactical Awareness',
      status: 'completed',
      icon: Star,
      description: 'Map control and positioning',
      color: 'from-purple-400 to-pink-500'
    },
    {
      week: 4,
      title: 'Team Coordination',
      status: 'completed',
      icon: Trophy,
      description: 'Squad tactics and communication',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      week: 5,
      title: 'Elite Challenges',
      status: 'active',
      icon: Clock,
      description: 'Advanced competitive scenarios',
      color: 'from-indigo-400 to-purple-600'
    }
  ];

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
            Training Process
          </h2>
          <p className="text-gray-400">5th Week Elite Challenge Program</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 rounded-full"></div>
          
          {/* Glowing effect for timeline */}
          <div className="absolute left-7 top-0 bottom-0 w-3 bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-purple-600/30 blur-sm rounded-full"></div>

          <div className="space-y-8">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isActive = process.status === 'active';
              const isCompleted = process.status === 'completed';
              
              return (
                <motion.div
                  key={process.week}
                  className="relative flex items-center"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                      isActive 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                        : isCompleted
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/30'
                        : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    animate={isActive ? {
                      boxShadow: [
                        "0 0 20px rgba(168, 85, 247, 0.5)",
                        "0 0 40px rgba(236, 72, 153, 0.7)",
                        "0 0 20px rgba(168, 85, 247, 0.5)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                  >
                    <Icon size={24} className="text-white" />
                    
                    {/* Pulsing ring for active state */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-purple-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Process Card */}
                  <motion.div
                    className={`ml-8 flex-1 p-6 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-gray-800/70 border-purple-400/50 shadow-lg shadow-purple-500/10'
                        : 'bg-gray-800/50 border-purple-500/20 hover:border-purple-400/40'
                    }`}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)" 
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          isCompleted 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : isActive
                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                            : 'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                        }`}>
                          Week {process.week}
                        </span>
                        <h3 className="text-xl font-bold text-white">{process.title}</h3>
                      </div>
                      
                      {isCompleted && (
                        <div className="text-green-400 text-sm font-semibold">Completed ✓</div>
                      )}
                      {isActive && (
                        <div className="text-purple-400 text-sm font-semibold animate-pulse">In Progress</div>
                      )}
                    </div>
                    
                    <p className="text-gray-400">{process.description}</p>
                    
                    {/* Progress indicator for active week */}
                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-purple-500/20">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "65%" }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
