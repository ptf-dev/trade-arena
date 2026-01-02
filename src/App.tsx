import { useState } from 'react';
import {
  Trophy,
  User,
  Zap,
  Award,
  ShieldCheck,
  LayoutDashboard,
  Settings,
  PlusCircle,
  FileText,
  Gamepad2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
const ASSETS = {
  LAPTOP: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/6744517d5c3f38b0075a506c_a.avif",
  LEADERBOARD_SNIPPET: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/68a5c31442709f17bf863a4e_dsvds.avif",
  REWARD_TIERS: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/6744517d5c3f38b0075a4cd8_klwkls.avif",
  USER_BADGE: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/6744517d5c3f38b0075a4f72_kmdcs.avif",
  TOURNAMENT_COVER: "https://firebasestorage.googleapis.com/v0/b/fortraders-production.firebasestorage.app/o/public%2Ftournament_cover%2Fe2207b07-3cdb-4e1b-96d8-1763c85679ae.jpg?alt=media",
  CHEST: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/6744517d5c3f38b0075a4f31_treasure_chest_open_black.avif"
};

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
    cover: ASSETS.TOURNAMENT_COVER,
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
    cover: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/67634f19b84a96937e28cd6e_cover_1.jpg",
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
    cover: "https://cdn.prod.website-files.com/6744517d5c3f38b0075a477b/67634f195e0329976378e99b_cover_3.jpg",
    registrationLink: import.meta.env.VITE_LINK_MONTHLY_MOONSHOT || 'https://tradingview.com'
  },
];

const TOP_TRADERS = [
  { rank: 1, name: 'CryptoKev', pnl: '+$42,450', roi: '142%', streak: 8, tier: 'Elite' },
  { rank: 2, name: 'PaperHands_RIP', pnl: '+$38,120', roi: '115%', streak: 5, tier: 'Elite' },
  { rank: 3, name: 'SatoshiGhost', pnl: '+$29,800', roi: '98%', streak: 12, tier: 'Elite' },
  { rank: 4, name: 'TraderJoe', pnl: '+$15,200', roi: '76%', streak: 3, tier: 'Gold' },
  { rank: 5, name: 'AlphaSeeker', pnl: '+$12,400', roi: '62%', streak: 4, tier: 'Gold' },
];

const TICKER_ITEMS = [
  "CRYPTOKEV JUST JUMPED 12 SPOTS ON THE LEADERBOARD! 🔥",
  "SATOSHIGHOST COMPLETED A 'HAT TRICK': 3 WINNING TRADES IN A ROW! 🎩",
  "NEW MONTHLY CHAMPIONSHIP OPENED: $50K REWARDS! 💰",
  "TRADERJOE EARNED THE 'COMEBACK KING' BADGE! 👑",
  "NEW SIDE QUEST: 'MOST VOLATILE TRADE OF THE DAY' IS NOW ACTIVE! ⚡"
];

// Sub-components
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
  <nav style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', background: 'rgba(5, 5, 7, 0.95)', backdropFilter: 'blur(20px)', position: 'sticky', top: '40px', zIndex: 100, borderBottom: '1px solid var(--panel-border)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ padding: '8px', background: 'var(--primary)', borderRadius: '8px' }}>
        <Trophy size={20} color="#fff" />
      </div>
      <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.5px' }}>LIVETRADINGLEAGUE</span>
    </div>
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <a href="#tournaments" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Tournaments</a>
      <a href="#leaderboard" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Leaderboards</a>
      <a href="#goal" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>About</a>
      <div style={{ height: '20px', width: '1px', background: 'var(--panel-border)' }}></div>
      <button onClick={onOpenManager} className="button-outline" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ShieldCheck size={18} /> Portal
      </button>
      <button className="button-primary" style={{ padding: '10px 24px' }}>Get Started</button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section-container" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
    <div className="hero-split">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ fontSize: '5.5rem', marginBottom: '24px' }}>
            Compete With <br />
            <span style={{ color: 'var(--primary)' }}>All Traders.</span> <br />
            From Anywhere.
          </h1>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
            Daily tournaments for trading challenges. Prove your skills and earn institutional rewards in the most prestigious league.
          </p>
          <button className="button-primary" style={{ height: '60px', padding: '0 40px', fontSize: '1.1rem' }}>
            <Gamepad2 size={24} /> Join Tournament
          </button>
        </motion.div>
      </div>
      <div className="hero-visual">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={ASSETS.LAPTOP} alt="Platform Preview" style={{ width: '100%', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.8))' }} />

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="floating-element"
            style={{ top: '20%', left: '-10%' }}
          >
            <div className="badge-float">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffcc00', display: 'grid', placeItems: 'center' }}>
                <Trophy size={20} color="#000" />
              </div>
              <div>
                <div style={{ fontWeight: 800 }}>$50K REWARD</div>
                <div style={{ fontSize: '0.75rem', color: '#00ff88' }}>+11.34% PROFIT</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="floating-element"
            style={{ bottom: '20%', right: '-5%' }}
          >
            <div className="badge-float" style={{ borderLeft: '4px solid #0066FF' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#1a1b1e', display: 'grid', placeItems: 'center' }}>
                <User size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 800 }}>SATOSHIGHOST</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>RANK #3</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ChampionshipHub = () => {
  const [activeTab, setActiveTab] = useState('Weekly');

  return (
    <section id="tournaments" className="section-container" style={{ borderTop: '1px solid var(--panel-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
        <div>
          <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Active Battles</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '12px' }}>Trading Tournaments</h2>
        </div>
        <div style={{ display: 'flex', background: 'var(--surface)', padding: '6px', borderRadius: '12px', border: '1px solid var(--panel-border)' }}>
          {['Weekly', 'Monthly'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 32px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === tab ? 'var(--primary)' : 'transparent',
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '32px' }}>
        {CHAMPIONSHIPS.filter(c => c.tier === activeTab).map((camp, i) => (
          <motion.div
            key={camp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
          >
            <img src={camp.cover} alt={camp.title} className="tournament-image" />
            <div style={{ padding: '32px' }}>
              <div className="card-badge">
                <Zap size={14} fill="currentColor" /> Trading Battle
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '24px' }}>{camp.title}</h3>

              <div className="info-box">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Reward</span>
                  <span style={{ fontSize: '1rem', fontWeight: 800 }}>{camp.prize}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Entry Fee</span>
                  <span style={{ fontSize: '1rem', fontWeight: 800 }}>{camp.fee}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>{camp.timeLabel}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)' }}>{camp.timeLeft.split(' ')[0]}</span>
                </div>
              </div>

              <button
                className="button-primary"
                style={{ width: '100%', height: '56px', fontSize: '1rem' }}
                onClick={() => window.open(camp.registrationLink, '_blank')}
              >
                Join Tournament
              </button>

              <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
                PLAYERS JOINED: {camp.participants.toLocaleString()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TheGoal = () => (
  <section id="goal" className="section-container">
    <div className="goal-section">
      <div className="goal-content">
        <h2 style={{ fontSize: '4.5rem', marginBottom: '32px' }}>The Goal is Simple!</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '24px' }}>
          Achieve the highest percentage gain by trading the instruments listed on the tournament's banner.
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', lineHeight: 1.6 }}>
          When the tournament ends at the specified time, the <span style={{ color: '#fff', fontWeight: 800 }}>top performers</span> with the best results will win prizes.
        </p>
      </div>
      <div className="goal-visual">
        <img src={ASSETS.REWARD_TIERS} alt="Rewards" style={{ width: '100%', maxWidth: '500px' }} />
        <img src={ASSETS.LEADERBOARD_SNIPPET} alt="Leaderboard" className="floating-element" style={{ width: '300px', top: '10%', right: '-10%' }} />
        <img src={ASSETS.USER_BADGE} alt="Winner" className="floating-element" style={{ width: '220px', bottom: '0', left: '-5%' }} />
        <img src={ASSETS.CHEST} alt="Treasure" className="chest-asset" />
      </div>
    </div>
  </section>
);

const Leaderboard = () => (
  <section id="leaderboard" className="section-container" style={{ background: 'rgba(255,255,255,0.01)' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Global Leaderboard</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>The world's best traders, ranked in real-time.</p>
      </div>

      <div className="glass-card" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--panel-border)', background: '#111114' }}>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>Rank</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>Trader</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>ROI %</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>Profit</th>
              <th style={{ padding: '24px', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {TOP_TRADERS.map((trader, i) => (
              <tr
                key={trader.name}
                style={{
                  borderBottom: i === TOP_TRADERS.length - 1 ? 'none' : '1px solid var(--panel-border)',
                }}
              >
                <td style={{ padding: '24px', fontWeight: 800, fontSize: '1.15rem' }}>
                  {i === 0 ? <Award color="#FFD700" size={28} /> : `#${trader.rank}`}
                </td>
                <td style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface)', display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <User size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{trader.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{trader.tier}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '24px', fontWeight: 800, color: '#00ff88' }}>{trader.roi}</td>
                <td style={{ padding: '24px', fontWeight: 800 }}>{trader.pnl}</td>
                <td style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00ff88' }}></div>
                    LIVE NOW
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

const ManagerPortal = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)',
      zIndex: 2000, display: 'grid', placeItems: 'center', padding: '24px'
    }}
  >
    <motion.div
      initial={{ scale: 0.95, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      className="glass-card"
      style={{ width: '100%', maxWidth: '900px', background: '#050507', border: '1px solid var(--panel-border)' }}
    >
      <div style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--panel-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ShieldCheck size={32} color="var(--primary)" />
          <h2 style={{ fontSize: '2rem' }}>Manager Control</h2>
        </div>
        <button onClick={onClose} style={{ background: 'var(--surface)', border: 'none', color: '#fff', cursor: 'pointer', padding: '10px', borderRadius: '50%' }}>✕</button>
      </div>

      <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '40px' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
            { icon: <PlusCircle size={20} />, label: "Create Tournament" },
            { icon: <FileText size={20} />, label: "Reports" },
            { icon: <Settings size={20} />, label: "General Settings" }
          ].map(item => (
            <button key={item.label} style={{ padding: '14px', background: item.active ? 'rgba(0,102,255,0.1)' : 'transparent', border: item.active ? '1px solid var(--primary)' : '1px solid transparent', color: item.active ? 'var(--primary)' : 'var(--text-muted)', borderRadius: '10px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, cursor: 'pointer' }}>
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div>
          <h3 style={{ marginBottom: '24px', fontSize: '1.25rem' }}>Active Tournaments</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[1, 2].map(id => (
              <div key={id} style={{ background: 'var(--surface)', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--panel-border)' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>Tournament Cycle #{id}0x9</div>
                  <div style={{ fontSize: '0.8rem', color: '#00ff88', fontWeight: 700, marginTop: '4px' }}>● LIVE NOW</div>
                </div>
                <button className="button-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Edit Details</button>
              </div>
            ))}
          </div>

          <button className="button-primary" style={{ width: '100%', marginTop: '32px' }}>
            <PlusCircle size={20} /> Launch New Battle
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--panel-border)', padding: '100px 24px 60px', background: '#050507' }}>
    <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <Trophy size={28} color="var(--primary)" />
          <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>LIVETRADINGLEAGUE</span>
        </div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.8, fontSize: '1.1rem' }}>
          The world's leading platform for competitive trading. Join the league, prove your dominance, and earn rewards.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '100px' }}>
        <div>
          <h4 style={{ marginBottom: '24px', color: '#fff', fontSize: '1.1rem' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><a href="#tournaments" style={{ color: 'inherit', textDecoration: 'none' }}>Tournaments</a></li>
            <li><a href="#leaderboard" style={{ color: 'inherit', textDecoration: 'none' }}>Leaderboard</a></li>
            <li><a href="#goal" style={{ color: 'inherit', textDecoration: 'none' }}>Goal & Rules</a></li>
            <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '24px', color: '#fff', fontSize: '1.1rem' }}>Community</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li>Discord</li>
            <li>X (Twitter)</li>
            <li>Instagram</li>
            <li>Telegram</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '100px', paddingTop: '40px', borderTop: '1px solid var(--panel-border)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
      © 2026 Livetradingleague. All rights reserved. Trade with caution.
    </div>
  </footer>
);

export default function App() {
  const [showManager, setShowManager] = useState(false);

  return (
    <div className="app-container" style={{ background: '#050507' }}>
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
        {showManager && <ManagerPortal onClose={() => setShowManager(false)} />}
      </AnimatePresence>
    </div>
  );
}
