import { Trophy, ShieldCheck } from 'lucide-react';

interface NavbarProps {
    onOpenManager: () => void;
}

const Navbar = ({ onOpenManager }: NavbarProps) => {
    return (
        <nav style={{
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '44px',
            background: 'rgba(2, 2, 3, 0.8)',
            backdropFilter: 'blur(20px)',
            position: 'sticky',
            top: '44px',
            zIndex: 100,
            borderBottom: '1px solid var(--panel-border)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                    padding: '10px',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    borderRadius: '10px',
                    boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)'
                }}>
                    <Trophy size={20} color="#fff" />
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.03em' }}>LIVETRADINGLEAGUE</span>
            </div>

            <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '32px' }}>
                    <a href="#tournaments" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: '0.2s' }}>Tournaments</a>
                    <a href="#leaderboard" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Leaderboards</a>
                    <a href="#goal" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>About</a>
                </div>

                <div style={{ height: '24px', width: '1px', background: 'var(--panel-border)' }}></div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <button onClick={onOpenManager} className="btn-outline">
                        <ShieldCheck size={18} /> Portal
                    </button>
                    <button className="btn-primary">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
