import { motion } from 'framer-motion';
import { Gamepad2, Trophy, User } from 'lucide-react';
import { ASSETS } from '../constants';

const Hero = () => {
    return (
        <section style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="bg-glow-top"></div>
            <div className="bg-grid"></div>

            <div className="section-container" style={{ paddingTop: '120px', paddingBottom: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                    <div style={{ flex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span style={{
                                color: 'var(--primary)',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                fontSize: '0.8rem',
                                display: 'block',
                                marginBottom: '16px'
                            }}>
                                The Future of Competitive Trading
                            </span>
                            <h1 className="text-gradient">
                                Compete With <br />
                                All Traders. <br />
                                From Anywhere.
                            </h1>
                            <p style={{
                                color: 'var(--text-dim)',
                                fontSize: '1.25rem',
                                marginTop: '24px',
                                marginBottom: '32px',
                                maxWidth: '540px',
                                lineHeight: 1.5
                            }}>
                                Join global tournaments, prove your dominance, and earn rewards. The ultimate meta-layer for decentralized trading excellence.
                            </p>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <button className="btn-primary" style={{ padding: '20px 48px' }}>
                                    <Gamepad2 size={24} /> Join Tournament
                                </button>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-muted)', fontWeight: 600 }}>
                                    <div style={{ display: 'flex', marginLeft: '10px' }}>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                background: '#1a1b1e',
                                                border: '2px solid var(--bg-color)',
                                                marginLeft: '-10px',
                                                display: 'grid',
                                                placeItems: 'center'
                                            }}>
                                                <User size={14} />
                                            </div>
                                        ))}
                                    </div>
                                    14k+ Active Traders
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div style={{ flex: 1.2, position: 'relative' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <img
                                    src={ASSETS.LAPTOP}
                                    alt="Platform"
                                    style={{
                                        width: '100%',
                                        filter: 'drop-shadow(0 0 80px rgba(0, 102, 255, 0.2))'
                                    }}
                                />

                                {/* Floating Elements - Glossy */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    style={{ position: 'absolute', top: '15%', left: '-15%', zIndex: 2 }}
                                >
                                    <div className="floating-badge">
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: 'linear-gradient(135deg, #ffcc00, #ff9900)',
                                            display: 'grid',
                                            placeItems: 'center',
                                            boxShadow: '0 8px 16px rgba(255, 204, 0, 0.3)'
                                        }}>
                                            <Trophy size={24} color="#000" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 900, color: '#fff' }}>$50K REWARD</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: 700 }}>+11.34% ROI</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                    style={{ position: 'absolute', bottom: '20%', right: '-5%', zIndex: 2 }}
                                >
                                    <div className="floating-badge" style={{ borderLeft: '4px solid var(--primary)' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: 'var(--surface)',
                                            display: 'grid',
                                            placeItems: 'center',
                                            border: '1px solid var(--panel-border)'
                                        }}>
                                            <User size={24} color="var(--primary)" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 900, color: '#fff' }}>SATOSHIGHOST</div>
                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 700 }}>ELITE RANK #3</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Background Glow behind laptop */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)',
                                zIndex: 0,
                                opacity: 0.4
                            }}></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
