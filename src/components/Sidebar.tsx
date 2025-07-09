import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  User, 
  Settings, 
  Trophy, 
  Target, 
  Calendar,
  Menu
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
    { id: 'matches', icon: Target, label: 'Matches', path: '/matches' },
    { id: 'tournaments', icon: Trophy, label: 'Tournaments', path: '/tournaments' },
    { id: 'schedule', icon: Calendar, label: 'Schedule', path: '/schedule' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <motion.aside
      className={`fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-purple-500/30 z-20 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-purple-500/30">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              NEXUS
            </motion.div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
          >
            <Menu className="text-purple-400" size={20} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.id} to={item.path}>
              <motion.div
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white shadow-lg shadow-purple-500/25'
                    : 'hover:bg-purple-500/20 text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={20} className={isActive ? 'text-purple-300' : ''} />
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
                
                {isActive && (
                  <motion.div
                    className="absolute left-0 w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-r-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="absolute bottom-4 left-4 right-4">
        <Link to="/player-profile">
          <motion.div
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-xl border border-purple-500/30 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <div className="text-sm font-medium text-white">Player One</div>
                <div className="text-xs text-purple-300">Level 42</div>
              </div>
            )}
          </motion.div>
        </Link>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
