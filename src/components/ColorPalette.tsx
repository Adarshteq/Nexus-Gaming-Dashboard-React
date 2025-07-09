
import React from 'react';
import { motion } from 'framer-motion';

const ColorPalette = () => {
  const colors = [
    { name: 'Primary Purple', value: '#a855f7', description: 'Main brand color' },
    { name: 'Secondary Pink', value: '#ec4899', description: 'Accent highlights' },
    { name: 'Cyber Blue', value: '#3b82f6', description: 'Tech elements' },
    { name: 'Neon Green', value: '#10b981', description: 'Success states' },
    { name: 'Electric Yellow', value: '#f59e0b', description: 'Warnings & gold' },
    { name: 'Deep Violet', value: '#7c3aed', description: 'Dark accents' }
  ];

  const typography = [
    { label: 'Hero Title', class: 'text-6xl font-black', sample: 'NEXUS' },
    { label: 'Section Header', class: 'text-3xl font-bold', sample: 'Dashboard' },
    { label: 'Card Title', class: 'text-xl font-semibold', sample: 'Character Name' },
    { label: 'Body Text', class: 'text-base font-normal', sample: 'Regular content text' },
    { label: 'Caption', class: 'text-sm font-medium', sample: 'Small details' }
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
            Design System
          </h2>
          <p className="text-gray-400">Color palette and typography showcase</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Palette */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Color Palette</h3>
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, index) => (
                <motion.div
                  key={color.name}
                  className="group cursor-pointer"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div 
                    className="w-full h-20 rounded-xl mb-3 shadow-lg border-2 border-transparent group-hover:border-white/20 transition-all duration-300"
                    style={{ 
                      backgroundColor: color.value,
                      boxShadow: `0 8px 32px ${color.value}40`
                    }}
                  ></div>
                  <div className="text-sm">
                    <div className="font-semibold text-white">{color.name}</div>
                    <div className="text-gray-400 font-mono text-xs">{color.value}</div>
                    <div className="text-gray-500 text-xs">{color.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Typography</h3>
            <div className="space-y-6">
              {typography.map((type, index) => (
                <motion.div
                  key={type.label}
                  className="group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{type.label}</span>
                    <span className="text-xs text-purple-400 font-mono">{type.class.split(' ').slice(0, 2).join(' ')}</span>
                  </div>
                  <div 
                    className={`${type.class} bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-400 transition-all duration-300`}
                    style={{
                      textShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                      filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))'
                    }}
                  >
                    {type.sample}
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

export default ColorPalette;
