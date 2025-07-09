
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Zap } from 'lucide-react';

const ProgressTracker = () => {
  const progressData = [
    { 
      title: 'Weekly Challenges', 
      current: 8, 
      total: 10, 
      icon: Target,
      color: 'from-blue-400 to-cyan-500',
      reward: '500 XP + Rare Skin'
    },
    { 
      title: 'Seasonal Goals', 
      current: 15, 
      total: 20, 
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      reward: 'Legendary Weapon'
    },
    { 
      title: 'Skill Mastery', 
      current: 7, 
      total: 12, 
      icon: Star,
      color: 'from-purple-400 to-pink-500',
      reward: 'Elite Badge'
    },
    { 
      title: 'Combat Training', 
      current: 22, 
      total: 25, 
      icon: Zap,
      color: 'from-green-400 to-emerald-500',
      reward: 'Power Boost'
    }
  ];

  const CircularProgress = ({ current, total, color, size = 120 }) => {
    const percentage = (current / total) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(107, 114, 128, 0.3)"
            strokeWidth="6"
            fill="none"
          />
          
          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">{current}</span>
          <span className="text-sm text-gray-400">/ {total}</span>
        </div>
      </div>
    );
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
            Progress Tracker
          </h2>
          <p className="text-gray-400">Track your journey to gaming mastery</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {progressData.map((item, index) => {
            const Icon = item.icon;
            const percentage = (item.current / item.total) * 100;
            
            return (
              <motion.div
                key={item.title}
                className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 text-center hover:border-purple-400/50 transition-all duration-300"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.15)" 
                }}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4 shadow-lg`}>
                  <Icon size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>

                {/* Circular Progress */}
                <div className="flex justify-center mb-4">
                  <CircularProgress 
                    current={item.current} 
                    total={item.total} 
                    color={item.color} 
                  />
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + 0.1 * index }}
                    />
                  </div>
                </div>

                {/* Reward */}
                <div className="text-xs text-purple-300 bg-purple-500/10 rounded-lg p-2 border border-purple-500/20">
                  <span className="font-semibold">Reward: </span>
                  {item.reward}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;
