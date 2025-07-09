import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-transparent to-pink-900/80"></div>
      
      {/* Animated Character Silhouette */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-gradient-to-b from-purple-400 to-pink-600 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))'
          }}
        >
          NEXUS
        </motion.h1>
        
        <motion.h2
          className="text-4xl font-bold mb-4 text-purple-300"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Gaming Dashboard
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Enter the future of gaming with our advanced dashboard featuring real-time stats, 
          character progression, and immersive game management tools.
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <div className="relative flex items-center gap-2">
              <Play size={20} />
              Launch Dashboard
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            className="group px-8 py-4 border-2 border-purple-500 rounded-xl font-semibold text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <Download size={20} />
              Download Game
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
