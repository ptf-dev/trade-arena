import { motion } from 'framer-motion';
import { ASSETS } from '../constants';

const TheGoal = () => {
    return (
        <section id="goal" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="section-container">
                <div style={{
                    background: 'rgba(18, 18, 22, 0.4)',
                    backdropFilter: 'blur(30px)',
                    borderRadius: '40px',
                    border: '1px solid var(--panel-border)',
                    padding: '100px 80px',
                    display: 'flex',
                    gap: '100px',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative gradients inside the box */}
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)', opacity: 0.3, zIndex: 0 }}></div>

                    <div style={{ flex: 1, zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 style={{ fontSize: '4.5rem', lineHeight: 1, marginBottom: '40px' }}>
                                The Goal is <br />
                                <span className="text-gradient">Simple!</span>
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <p style={{ color: 'var(--text-dim)', fontSize: '1.4rem', lineHeight: 1.6 }}>
                                    Achieve the highest percentage gain by trading the instruments listed on the tournament's banner.
                                </p>
                                <p style={{ color: 'var(--text-dim)', fontSize: '1.4rem', lineHeight: 1.6 }}>
                                    When the tournament ends at the specified time, the <span style={{ color: '#fff', fontWeight: 900, textDecoration: 'underline', textDecorationColor: 'var(--primary)' }}>top performers</span> with the best results will win prizes.
                                </p>
                            </div>

                            <div style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>100%</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Transparent</div>
                                </div>
                                <div style={{ width: '1px', height: '60px', background: 'var(--panel-border)' }}></div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>#1</div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Elite Venue</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div style={{ flex: 1.4, position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <img
                                src={ASSETS.REWARD_TIERS}
                                alt="Rewards"
                                style={{ width: '100%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
                            />

                            <motion.img
                                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                src={ASSETS.LEADERBOARD_SNIPPET}
                                alt="Leaderboard"
                                style={{ position: 'absolute', top: '-15%', right: '-10%', width: '300px', filter: 'drop-shadow(var(--shadow-premium))' }}
                            />

                            <motion.img
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                src={ASSETS.USER_BADGE}
                                alt="Winner"
                                style={{ position: 'absolute', bottom: '-10%', left: '-15%', width: '220px', filter: 'drop-shadow(var(--shadow-premium))' }}
                            />

                            <motion.img
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                src={ASSETS.CHEST}
                                alt="Chest"
                                style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '200px', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.6))' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheGoal;
