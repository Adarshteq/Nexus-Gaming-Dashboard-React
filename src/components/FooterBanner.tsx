import React from 'react';
import { motion } from 'framer-motion';
import { Download, Play, Star, Share, Twitter, Instagram, Youtube } from 'lucide-react';

const FooterBanner = () => {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <footer className="ml-64 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Banner */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-900/80 via-pink-900/60 to-purple-900/80 rounded-3xl p-12 mb-8 overflow-hidden border border-purple-500/30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20"></div>
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, #8b5cf650 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, #ec4899/50 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, #8b5cf650 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h2
              className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                filter: 'drop-shadow(0 0 20px rgba(236, 72, 153, 0.4))'
              }}
            >
              Ready to Dominate?
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join millions of players in the ultimate gaming experience. 
              Download Nexus Arena now and claim your place among the elite.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white text-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative flex items-center gap-3">
                  <Download size={24} />
                  Download Free
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="group px-8 py-4 border-2 border-purple-400 rounded-xl font-bold text-purple-300 text-lg hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                  borderColor: "rgba(236, 72, 153, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-3">
                  <Play size={24} />
                  Watch Trailer
                </div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 pt-8 border-t border-purple-500/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { label: 'Active Players', value: '2.5M+' },
                { label: 'Matches Played', value: '150M+' },
                { label: 'Tournament Prize', value: '$500K+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-purple-500/10 p-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo & Description */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                NEXUS
              </h3>
              <p className="text-gray-400 max-w-md">
                The ultimate gaming dashboard for competitive players. 
                Track stats, join tournaments, and dominate the arena.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-gray-700/50 hover:bg-purple-500/20 rounded-xl border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-500/10 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © Nexus Gaming. All rights reserved. Built with ❤️ for gamers.
            </p>
          </div>
        </motion.div>

        {/* Floating Back to Top */}
        <motion.button
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↑
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
        </motion.button>
      </div>
    </footer>
  );
};

export default FooterBanner;
