import { useState } from 'react';
import {
  Trophy,
  Users,
  TrendingUp,
  Clock,
  User,
  Zap,
  Target,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data
const CHAMPIONSHIPS = [
  {
    id: 1,
    title: 'Weekly Alpha',
    tier: 'Weekly',
    prize: '$5,000',
    participants: 450,
    timeLeft: '2d 4h',
    manager: 'Admin01',
    color: 'var(--primary)',
    registrationLink: import.meta.env.VITE_LINK_WEEKLY_ALPHA || 'https://tradingview.com'
  },
  {
    id: 2,
    title: 'Moonshot Monthly',
    tier: 'Monthly',
    prize: '$25,000',
    participants: 1200,
    timeLeft: '14d 8h',
    manager: 'WhaleWatcher',
    color: 'var(--secondary)',
    registrationLink: import.meta.env.VITE_LINK_MONTHLY_MOONSHOT || 'https://tradingview.com'
  },
  {
    id: 3,
    title: 'Day Trader Duel',
    tier: 'Weekly',
    prize: '$2,500',
    participants: 180,
    timeLeft: '5h 22m',
    manager: 'QuickScalp',
    color: 'var(--accent)',
    registrationLink: import.meta.env.VITE_LINK_DAY_TRADER_DUEL || 'https://tradingview.com'
  },
  {
    id: 4,
    title: 'Hedge Fund Hero',
    tier: 'Bi-Weekly',
    prize: '$10,000',
    participants: 85,
    timeLeft: '6d 12h',
    manager: 'EliteFund',
    color: 'var(--info)',
    registrationLink: import.meta.env.VITE_LINK_HEDGE_FUND_HERO || 'https://tradingview.com'
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

const Navbar = () => (
  <nav style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ padding: '8px', background: 'var(--primary)', borderRadius: '8px' }}>
        <Trophy size={24} color="#000" />
      </div>
      <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px' }}>LIVETRADINGLEAGUE</span>
    </div>
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Championships</a>
      <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Leaderboard</a>
      <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 500 }}>Profile</a>
      <div style={{ height: '24px', width: '1px', background: 'var(--panel-border)' }}></div>
      <button className="button-outline" style={{ padding: '8px 16px' }}>Manager Portal</button>
      <button className="button-primary" style={{ padding: '8px 16px' }}>Connect</button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="section-container" style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '60px' }}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem' }}>The Ultimate Trading Arena</span>
      <h1 style={{ fontSize: '4.5rem', marginTop: '10px', lineHeight: 1 }}>
        Dominate the <span className="gradient-text">Global</span> Leaderboard
      </h1>
      <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '20px auto', fontSize: '1.2rem' }}>
        Enter decentralized championships, maintain 100% control of your funds, and prove you're the best trader in the arena.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>$1,240,500</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Total Prize Pool</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>14,204</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Active Traders</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>82</div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Live Tournaments</div>
        </div>
      </div>
    </motion.div>
  </header>
);

const ChampionshipHub = () => {
  const [activeTab, setActiveTab] = useState('Weekly');

  return (
    <section className="section-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem' }}>Championship Hub</h2>
          <p style={{ color: 'var(--text-muted)' }}>Find your next challenge and start climbing the ranks.</p>
        </div>
        <div style={{ display: 'flex', background: 'var(--panel-bg)', padding: '4px', borderRadius: '12px' }}>
          {['Weekly', 'Bi-Weekly', 'Monthly'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === tab ? 'var(--panel-border)' : 'transparent',
                color: activeTab === tab ? '#fff' : 'var(--text-dim)',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {CHAMPIONSHIPS.filter(c => c.tier === activeTab).map((camp, i) => (
          <motion.div
            key={camp.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: '24px', borderTop: `4px solid ${camp.color}` }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem' }}>{camp.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                <Clock size={14} />
                {camp.timeLeft}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Prize Pool</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: camp.color }}>{camp.prize}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={16} color="var(--text-muted)" />
                <span>{camp.participants} Joined</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} color="var(--text-muted)" />
                <span>By {camp.manager}</span>
              </div>
            </div>

            <button
              className="button-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => window.open(camp.registrationLink, '_blank')}
            >
              Register Now <ArrowUpRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Leaderboard = () => (
  <section className="section-container" style={{ background: 'rgba(255,255,255,0.02)' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5rem' }}>The Grand Leaderboard</h2>
        <p style={{ color: 'var(--text-muted)' }}>Top performers across all active championships.</p>
      </div>

      <div className="glass-card">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--panel-border)' }}>
              <th style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 600 }}>RANK</th>
              <th style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 600 }}>TRADER</th>
              <th style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 600 }}>P&L</th>
              <th style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 600 }}>ROI%</th>
              <th style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 600 }}>STREAK</th>
              <th style={{ padding: '20px', color: 'var(--text-muted)', fontWeight: 600 }}>TIER</th>
            </tr>
          </thead>
          <tbody>
            {TOP_TRADERS.map((trader, i) => (
              <tr
                key={trader.name}
                style={{
                  borderBottom: i === TOP_TRADERS.length - 1 ? 'none' : '1px solid var(--panel-border)',
                  background: i === 0 ? 'rgba(0, 242, 255, 0.05)' : 'transparent'
                }}
              >
                <td style={{ padding: '20px', fontWeight: 700 }}>
                  {i === 0 ? <Award color="#FFD700" size={20} /> : `#${trader.rank}`}
                </td>
                <td style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#333', display: 'grid', placeItems: 'center' }}>
                      <User size={16} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{trader.name}</div>
                      <div style={{ fontSize: '0.75rem', color: trader.badge === 'Comeback King' ? 'var(--accent)' : 'var(--info)' }}>{trader.badge}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '20px', color: 'var(--success)', fontWeight: 600 }}>{trader.pnl}</td>
                <td style={{ padding: '20px', fontWeight: 600 }}>{trader.roi}</td>
                <td style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Zap size={14} color="var(--warning)" fill="var(--warning)" />
                    {trader.streak}
                  </div>
                </td>
                <td style={{ padding: '20px' }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    background: trader.tier === 'Elite' ? 'rgba(112, 0, 255, 0.2)' : 'rgba(255, 204, 0, 0.2)',
                    color: trader.tier === 'Elite' ? 'var(--secondary)' : 'var(--warning)',
                    border: trader.tier === 'Elite' ? '1px solid var(--secondary)' : '1px solid var(--warning)'
                  }}>
                    {trader.tier.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', textAlign: 'center', borderTop: '1px solid var(--panel-border)' }}>
          <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            Your Position: <strong>#1,402</strong> (Bronze League). You are 12% profit away from Silver!
          </span>
        </div>
      </div>
    </div>
  </section>
);

const Challenges = () => (
  <section className="section-container">
    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Side Quests & Challenges</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '30px' }}>
          Break away from the main championship with high-speed interactive challenges. Earn exclusive badges and rewards in real-time.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Target color="var(--accent)" size={20} />
              <span style={{ fontWeight: 700 }}>Zero-Loss Week</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Complete 5+ trades this week with 0 total losses.</p>
            <div style={{ marginTop: '15px' }}>
              <div style={{ height: '4px', background: '#222', borderRadius: '2px' }}>
                <div style={{ width: '60%', height: '100%', background: 'linear-gradient(90deg, var(--accent), var(--secondary))', borderRadius: '2px' }}></div>
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '5px', textAlign: 'right' }}>3/5 Trades</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <TrendingUp color="var(--primary)" size={20} />
              <span style={{ fontWeight: 700 }}>Volatility Hunter</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Highest ROI on a single crypto trade within 24h.</p>
            <div style={{ marginTop: '15px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
              4h 12m remaining
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'grid', placeItems: 'center' }}>
        <div style={{
          width: '100%',
          aspectRatio: '1',
          maxHeight: '400px',
          background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)',
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          position: 'relative'
        }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', width: '90%', height: '90%', border: '1px dashed var(--primary-glow)', borderRadius: '50%' }}
          />
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <Award size={80} color="var(--primary)" />
            <div style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '10px' }}>DAILY QUESTS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--panel-border)', padding: '60px 24px', marginTop: 'auto' }}>
    <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 24px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Trophy size={20} color="var(--primary)" />
          <span style={{ fontWeight: 800 }}>LIVETRADINGLEAGUE</span>
        </div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
          The meta-layer for competitive trading. Decentralized, autonomous, and transparent.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '60px' }}>
        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '0.9rem', color: '#fff' }}>Platform</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Leaderboards</li>
            <li>Tournaments</li>
            <li>Challenges</li>
            <li>Rewards</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '15px', fontSize: '0.9rem', color: '#fff' }}>Company</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>About Us</li>
            <li>Managers</li>
            <li>Partners</li>
            <li>X (Twitter)</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '60px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
      © 2026 Livetradingleague. All rights reserved. Please trade responsibly.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app-container">
      <Ticker />
      <Navbar />
      <Hero />
      <ChampionshipHub />
      <Leaderboard />
      <Challenges />
      <Footer />
    </div>
  );
}
