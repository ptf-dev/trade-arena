import { Trophy } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--panel-border)', padding: '100px 24px 60px', background: 'var(--bg-color)' }}>
            <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', padding: 0 }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                        <div style={{ padding: '8px', background: 'var(--primary)', borderRadius: '8px' }}>
                            <Trophy size={20} color="#fff" />
                        </div>
                        <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.04em' }}>LIVETRADINGLEAGUE</span>
                    </div>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '400px', lineHeight: 1.8, fontSize: '1.1rem' }}>
                        Revolutionizing the trading arena with decentralized competition and institutional-grade rewards. Prove your edge, climb the ranks.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '120px' }}>
                    <div>
                        <h4 style={{ marginBottom: '24px', color: '#fff', fontSize: '1.1rem', fontWeight: 800 }}>Ecosystem</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li><a href="#tournaments" style={{ color: 'inherit', textDecoration: 'none' }}>Tournaments</a></li>
                            <li><a href="#leaderboard" style={{ color: 'inherit', textDecoration: 'none' }}>Leaderboards</a></li>
                            <li><a href="#goal" style={{ color: 'inherit', textDecoration: 'none' }}>Protocol</a></li>
                            <li>Academy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '24px', color: '#fff', fontSize: '1.1rem', fontWeight: 800 }}>Company</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-dim)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>X (Twitter)</li>
                            <li>Telegram</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: '100px',
                paddingTop: '40px',
                borderTop: '1px solid var(--panel-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 600
            }}>
                <span>© 2026 Livetradingleague. All rights reserved.</span>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <span>Risk Warning</span>
                    <span>Security</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
