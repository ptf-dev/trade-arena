import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import KeyFeatures from './components/KeyFeatures';
import ChampionshipHub from './components/ChampionshipHub';
import HowItWorks from './components/HowItWorks';
import TheGoal from './components/TheGoal';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import ManagerPortal from './components/ManagerPortal';
import FAQ from './components/FAQ';

export default function App() {
  const [showManager, setShowManager] = useState(false);

  return (
    <div className="app-container">
      <Ticker />
      <Navbar onOpenManager={() => setShowManager(true)} />

      <main>
        <Hero />
        <StatsBar />
        <KeyFeatures />
        <ChampionshipHub />
        <HowItWorks />
        <TheGoal />
        <Leaderboard />
        <FAQ />
      </main>

      <Footer />

      <AnimatePresence>
        {showManager && (
          <ManagerPortal onClose={() => setShowManager(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
