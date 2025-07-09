import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Shield, Target } from 'lucide-react';

const CharacterShowcase = () => {
  const characters = [
    {
      name: 'Cyber Striker',
      class: 'Assault',
      level: 45,
      icon: '⚡',
      stats: { attack: 95, defense: 70, speed: 90, skill: 85 },
      rarity: 'Legendary',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Quantum Guardian',
      class: 'Tank',
      level: 38,
      icon: '🛡️',
      stats: { attack: 75, defense: 98, speed: 60, skill: 80 },
      rarity: 'Epic',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Shadow Assassin',
      class: 'Stealth',
      level: 42,
      icon: '🗡️',
      stats: { attack: 90, defense: 65, speed: 95, skill: 92 },
      rarity: 'Legendary',
      color: 'from-indigo-400 to-purple-600'
    },
    {
      name: 'Plasma Sniper',
      class: 'Marksman',
      level: 40,
      icon: '🎯',
      stats: { attack: 88, defense: 60, speed: 75, skill: 96 },
      rarity: 'Epic',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const StatBar = ({ label, value, icon: Icon }) => (
    <div className="flex items-center gap-2 mb-2">
      <Icon size={14} className="text-purple-400" />
      <span className="text-xs text-gray-400 w-12">{label}</span>
      <div className="flex-1 bg-gray-700 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      <span className="text-xs text-white font-semibold w-8">{value}</span>
    </div>
  );

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
            Character Showcase
          </h2>
          <p className="text-gray-400">Master your arsenal of elite warriors</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.15)" 
              }}
            >
              {/* Character Avatar */}
              <div className="relative mb-4">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${character.color} rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-lg`}>
                  {character.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${character.color} opacity-20 rounded-2xl blur-xl`}></div>
                
                {/* Rarity Badge */}
                <div className={`absolute top-0 right-0 px-2 py-1 rounded-full text-xs font-semibold ${
                  character.rarity === 'Legendary' 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {character.rarity}
                </div>
              </div>

              {/* Character Info */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-1">{character.name}</h3>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span>{character.class}</span>
                  <span>•</span>
                  <span className="text-purple-400">Lv.{character.level}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-1">
                <StatBar label="ATK" value={character.stats.attack} icon={Zap} />
                <StatBar label="DEF" value={character.stats.defense} icon={Shield} />
                <StatBar label="SPD" value={character.stats.speed} icon={Target} />
                <StatBar label="SKL" value={character.stats.skill} icon={Star} />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Action Button */}
              <motion.button
                className="mt-4 w-full py-2 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl text-sm font-semibold text-white border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Select Character
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;
