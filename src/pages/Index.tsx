
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';
import DashboardPanel from '../components/DashboardPanel';
import CharacterShowcase from '../components/CharacterShowcase';
import ProgressTracker from '../components/ProgressTracker';
import ColorPalette from '../components/ColorPalette';
import StreamerGrid from '../components/StreamerGrid';
import NewsPanel from '../components/NewsPanel';
import ProcessTimeline from '../components/ProcessTimeline';
import FooterBanner from '../components/FooterBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated background with particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #8b5cf650 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #ec4899/50 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #8b5cf650 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        
        <div className="flex">
          <Sidebar />
          <main className="flex-1 min-h-screen">
            <DashboardPanel />
            <ColorPalette />
            <CharacterShowcase />
            <ProgressTracker />
            <ProcessTimeline />
            <StreamerGrid />
            <NewsPanel />
            <FooterBanner />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
