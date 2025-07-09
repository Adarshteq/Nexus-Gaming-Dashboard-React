
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Star, TrendingUp } from 'lucide-react';

const NewsPanel = () => {
  const news = [
    {
      title: 'New Character Release: Shadow Reaper',
      excerpt: 'Meet the latest addition to the Nexus roster with unique stealth abilities and devastating combos.',
      category: 'Character Update',
      date: '2 hours ago',
      image: '🗡️',
      featured: true
    },
    {
      title: 'Season 5 Championship Tournament',
      excerpt: 'Registration now open for the biggest competitive event of the year with $100K prize pool.',
      category: 'Tournament',
      date: '5 hours ago',
      image: '🏆',
      featured: true
    },
    {
      title: 'Balance Update 3.2.1 Live Now',
      excerpt: 'Major changes to weapon damage, character abilities, and map layouts based on community feedback.',
      category: 'Game Update',
      date: '1 day ago',
      image: '⚖️',
      featured: false
    },
    {
      title: 'New Map: Cyber Metropolis',
      excerpt: 'Explore the neon-lit streets and towering skyscrapers in our most ambitious map yet.',
      category: 'Content',
      date: '2 days ago',
      image: '🌆',
      featured: false
    },
    {
      title: 'Community Highlight: Top Plays',
      excerpt: 'Check out the most incredible plays from last week featuring amazing team coordination.',
      category: 'Community',
      date: '3 days ago',
      image: '⭐',
      featured: false
    },
    {
      title: 'Developer Insights: Future Roadmap',
      excerpt: 'Our development team shares what\'s coming next including new game modes and features.',
      category: 'Developer',
      date: '4 days ago',
      image: '🛠️',
      featured: false
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Character Update': return 'from-purple-400 to-pink-500';
      case 'Tournament': return 'from-yellow-400 to-orange-500';
      case 'Game Update': return 'from-blue-400 to-cyan-500';
      case 'Content': return 'from-green-400 to-emerald-500';
      case 'Community': return 'from-pink-400 to-rose-500';
      case 'Developer': return 'from-indigo-400 to-purple-500';
      default: return 'from-gray-400 to-gray-500';
    }
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
            Latest News & Updates
          </h2>
          <p className="text-gray-400">Stay up to date with the latest from Nexus Arena</p>
        </motion.div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {news.filter(item => item.featured).map((item, index) => (
            <motion.article
              key={item.title}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.15)" 
              }}
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-xs font-semibold text-purple-300">
                  <Star size={12} />
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex-1">
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(item.category)} bg-clip-text text-transparent border border-purple-500/20 mb-2`}>
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 leading-relaxed">{item.excerpt}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <motion.button
                    className="text-sm text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.article>
          ))}
        </div>

        {/* Regular News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.filter(item => !item.featured).map((item, index) => (
            <motion.article
              key={item.title}
              className="group bg-gray-800/30 backdrop-blur-xl rounded-xl border border-purple-500/10 p-4 hover:border-purple-400/30 transition-all duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.02, 
                y: -4,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.1)" 
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{item.image}</div>
                <div className="flex-1">
                  <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(item.category)} bg-clip-text text-transparent`}>
                    {item.category}
                  </div>
                </div>
              </div>
              
              <h4 className="text-sm font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {item.title}
              </h4>
              
              <p className="text-xs text-gray-400 mb-3 line-clamp-2">{item.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{item.date}</span>
                <motion.button
                  className="text-xs text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPanel;
