import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChampionshipHub from './components/ChampionshipHub';
import TheGoal from './components/TheGoal';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import ManagerPortal from './components/ManagerPortal';

export default function App() {
  const [showManager, setShowManager] = useState(false);

  return (
    <div className="app-container">
      <Ticker />
      <Navbar onOpenManager={() => setShowManager(true)} />

      <main>
        <Hero />
        <ChampionshipHub />
        <TheGoal />
        <Leaderboard />
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
