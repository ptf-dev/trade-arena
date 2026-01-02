import { useState } from 'react';
import {
  Trophy,
  TrendingUp,
  User,
  Zap,
  Target,
  Award,
  ShieldCheck,
  LayoutDashboard,
  Settings,
  PlusCircle,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const CHAMPIONSHIPS = [
  {
    id: 1,
    title: 'January Clash',
    tier: 'Weekly',
    prize: '50K Challenge',
    fee: 'Free',
    participants: 1481,
    timeLabel: 'Ends in',
    timeLeft: '27d 20:17:59',
    manager: 'Admin01',
    color: '#0066FF',
    registrationLink: import.meta.env.VITE_LINK_WEEKLY_ALPHA || 'https://tradingview.com'
  },
  {
    id: 2,
    title: 'Wednesday Clash',
    tier: 'Weekly',
    prize: '50K Challenge',
    fee: 'Free',
    participants: 18,
    timeLabel: 'Starts in',
    timeLeft: '4d 20:17:59',
    manager: 'WhaleWatcher',
    color: '#0066FF',
    registrationLink: import.meta.env.VITE_LINK_DAY_TRADER_DUEL || 'https://tradingview.com'
  },
  {
    id: 3,
    title: 'February Clash',
    tier: 'Monthly',
    prize: '50K Challenge',
    fee: 'Free',
    participants: 7,
    timeLabel: 'Starts in',
    timeLeft: '30d 20:17:59',
    manager: 'EliteFund',
    color: '#0066FF',
    registrationLink: import.meta.env.VITE_LINK_MONTHLY_MOONSHOT || 'https://tradingview.com'
  },
];

const TOP_TRADERS = [
  { rank: 1, name: 'CryptoKev', pnl: '+$42,450', roi: '142%', streak: 8, tier: 'Elite', badge: 'Comeback King' },
  { rank: 2, name: 'PaperHands_RIP', pnl: '+$38,120', roi: '115%', streak: 5, tier: 'Elite', badge: 'Diamond Mind' },
  { rank: 3, name: 'SatoshiGhost', pnl: '+$29,800', roi: '98%', streak: 12, tier: 'Elite', badge: 'Unstoppable' },
  { rank: 4, name: 'TraderJoe', pnl: '+$15,200', roi: '76%', streak: 3, tier: 'Gold', badge: 'Steady Hand' },
  { rank: 5, name: 'AlphaSeeker', pnl: '+$12,400', roi: '62%', streak: 4, tier: 'Gold', badge: 'Vigilant' },
];

const TICKER_ITEMS = [
  "CRYPTOKEV JUST JUMPED 12 SPOTS ON THE LEADERBOARD! 🔥",
  "SATOSHIGHOST COMPLETED A 'HAT TRICK': 3 WINNING TRADES IN A ROW! 🎩",
  "WHALEWATCHER OPENED A NEW MONTHLY CHAMPIONSHIP: $25K PRIZE POOL! 💰",
  "TRADERJOE EARNED THE 'COMEBACK KING' BADGE! 👑",
  "NEW SIDE QUEST: 'MOST VOLATILE TRADE OF THE DAY' IS NOW ACTIVE! ⚡"
];

// Components
const Ticker = () => (
  <div className="ticker-wrap">
    <div className="ticker">
      {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  </div>
);

const Navbar = ({ onOpenManager }: { onOpenManager: () => void }) => (
  <nav style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', background: 'rgba(5, 5, 7, 0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: '40px', zIndex: 100 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ padding: '8px', background: '#0066FF', borderRadius: '8px' }}>
        <Trophy size={24} color="#fff" />
      </div>
      <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>LIVETRADINGLEAGUE</span>
    </div>
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <a href="#championships" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Tournaments</a>
      <a href="#leaderboard" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Leaderboard</a>
      <a href="#challenges" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Challenges</a>
      <div style={{ height: '24px', width: '1px', background: 'var(--panel-border)' }}></div>
      <button onClick={onOpenManager} className="button-outline" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ShieldCheck size={18} /> Manager Portal
      </button>
      <button className="button-primary" style={{ padding: '8px 20px', background: '#0066FF' }}>Connect Wallet</button>
    </div>
  </nav>
);

const Hero = () => (
  <header style={{
    textAlign: 'center',
    padding: '120px 24px 80px',
    background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.05) 0%, transparent 70%)',
    position: 'relative'
  }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: -1 }}></div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-2px' }}>
        Join <span style={{ color: '#0066FF' }}>Tournament</span> Now!
      </h1>
      <p style={{ color: 'var(--text-dim)', maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.25rem', lineHeight: 1.6 }}>
        The most prestigious live trading league. Prove your skills, climb the ranks, and earn institutional backing.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: '#0066FF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Prize Pool</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>$1.2M</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', color: '#0066FF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Total Players</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>14,204</div>
        </div>
      </div>
    </motion.div>
  </header>
);

const ManagerPortal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)',
      zIndex: 2000, display: 'grid', placeItems: 'center', padding: '24px'
    }}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      style={{ width: '100%', maxWidth: '800px' }}
      className="glass-card"
    >
      <div style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--panel-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ShieldCheck size={32} color="#0066FF" />
          <h2 style={{ fontSize: '1.75rem' }}>Manager Portal</h2>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.5rem' }}>✕</button>
      </div>

      <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button style={{ padding: '12px', background: 'rgba(0,102,255,0.1)', border: '1px solid #0066FF', color: '#fff', borderRadius: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button style={{ padding: '12px', background: 'transparent', border: '1px solid transparent', color: 'var(--text-dim)', borderRadius: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PlusCircle size={18} /> Create Tournament
          </button>
          <button style={{ padding: '12px', background: 'transparent', border: '1px solid transparent', color: 'var(--text-dim)', borderRadius: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={18} /> Performance Logs
          </button>
          <button style={{ padding: '12px', background: 'transparent', border: '1px solid transparent', color: 'var(--text-dim)', borderRadius: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Settings size={18} /> Settings
          </button>
        </div>

        <div>
          <h3 style={{ marginBottom: '20px' }}>Active Championships</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[1, 2].map(id => (
              <div key={id} style={{ background: '#25262b', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>Tournament #{id}042</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Status: <span style={{ color: 'var(--success)' }}>Active</span></div>
                </div>
                <button className="button-outline" style={{ fontSize: '0.85rem' }}>Manage</button>
              </div>
            ))}
          </div>

          <button className="button-primary" style={{ width: '100%', marginTop: '30px', background: '#0066FF' }}>
            <PlusCircle size={20} /> Create New Championship
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ChampionshipHub = () => {
  const [activeTab, setActiveTab] = useState('Weekly');

  return (
    <section id="championships" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Current Tournaments</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', background: '#1a1b1e', padding: '6px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            {['Weekly', 'Monthly'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 32px',
                  borderRadius: '10px',
                  border: 'none',
                  background: activeTab === tab ? '#0066FF' : 'transparent',
                  color: '#fff',
                  cursor: 'pointer',
                  fontWeight: 700,
                  transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
        {CHAMPIONSHIPS.filter(c => c.tier === activeTab).map((camp, i) => (
          <motion.div
            key={camp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: '32px' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '24px' }}>{camp.title}</h3>

              <div className="info-box">
                <div className="info-item">
                  <span className="info-label">Reward</span>
                  <span className="info-value">{camp.prize}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entry Fee</span>
                  <span className="info-value">{camp.fee}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{camp.timeLabel}</span>
                  <span className="info-value" style={{ color: '#0066FF' }}>{camp.timeLeft}</span>
                </div>
              </div>
            </div>

            <button
              className="button-primary"
              style={{ width: '100%', height: '56px', fontSize: '1.1rem', background: '#0066FF', justifyContent: 'center' }}
              onClick={() => window.open(camp.registrationLink, '_blank')}
            >
              Join Tournament
            </button>

            <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
              Players Joined: {camp.participants.toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Leaderboard = () => (
  <section id="leaderboard" className="section-container" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Global Rankings</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Top performers competing for the elite spots.</p>
      </div>

      <div className="glass-card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--panel-border)', background: '#1a1b1e' }}>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>Rank</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>Trader</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>P&L</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>ROI%</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>Win Streak</th>
            </tr>
          </thead>
          <tbody>
            {TOP_TRADERS.map((trader, i) => (
              <tr
                key={trader.name}
                style={{
                  borderBottom: i === TOP_TRADERS.length - 1 ? 'none' : '1px solid var(--panel-border)',
                  transition: 'background 0.2s'
                }}
              >
                <td style={{ padding: '24px', fontWeight: 800, fontSize: '1.1rem' }}>
                  {i === 0 ? <Award color="#FFD700" size={24} /> : `#${trader.rank}`}
                </td>
                <td style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25262b', display: 'grid', placeItems: 'center' }}>
                      <User size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{trader.name}</div>
                      <div style={{ fontSize: '0.75rem', color: '#0066FF', fontWeight: 700 }}>{trader.tier.toUpperCase()}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '24px', color: 'var(--success)', fontWeight: 800 }}>{trader.pnl}</td>
                <td style={{ padding: '24px', fontWeight: 800 }}>{trader.roi}</td>
                <td style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--warning)', fontWeight: 700 }}>
                    <Zap size={16} fill="var(--warning)" /> {trader.streak}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="section-container">
    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>The Goal is Simple!</h2>
      <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Follow these steps to elite status and institutional backing.</p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
      {[
        { icon: <Target />, title: "Select Venue", desc: "Choose your preferred trading environment and tournament cycle." },
        { icon: <TrendingUp />, title: "Prove Skills", desc: "Maintain discipline and achieve targets to climb the leaderboard." },
        { icon: <Award />, title: "Get Funded", desc: "Top performers receive direct challenge passes and rewards." }
      ].map((f, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(0,102,255,0.1)', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 24px', color: '#0066FF' }}>
            {f.icon}
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{f.title}</h3>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--panel-border)', padding: '80px 24px 40px', marginTop: 'auto', background: '#050507' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <Trophy size={24} color="#0066FF" />
          <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>LIVETRADINGLEAGUE</span>
        </div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '350px', lineHeight: 1.6 }}>
          Leading the way in decentralized competitive trading. Decentralized, autonomous, and 100% transparent.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '80px' }}>
        <div>
          <h4 style={{ marginBottom: '24px', color: '#fff', fontSize: '1rem' }}>Ecosystem</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>Tournaments</li>
            <li>Leaderboards</li>
            <li>Challenges</li>
            <li>Academy</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '24px', color: '#fff', fontSize: '1rem' }}>Support</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>X (Twitter)</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--panel-border)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
      © 2026 Livetradingleague. All rights reserved. Trade responsibly and manage your risk.
    </div>
  </footer>
);

export default function App() {
  const [showManager, setShowManager] = useState(false);

  return (
    <div className="app-container" style={{ background: '#050507' }}>
      <Ticker />
      <Navbar onOpenManager={() => setShowManager(true)} />
      <Hero />
      <ChampionshipHub />
      <Leaderboard />
      <Features />
      <Footer />

      <AnimatePresence>
        {showManager && <ManagerPortal onClose={() => setShowManager(false)} />}
      </AnimatePresence>
    </div>
  );
}
