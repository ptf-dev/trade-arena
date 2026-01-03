import { motion } from 'framer-motion';
import { UserPlus, BarChart2, Trophy, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: UserPlus,
        title: "Join a League",
        desc: "Choose from daily, weekly, or monthly tournaments. Entry fees start as low as $10."
    },
    {
        icon: BarChart2,
        title: "Trade & Compete",
        desc: "Execute trades with real-time market data. Your performance is tracked live on the leaderboard."
    },
    {
        icon: Trophy,
        title: "Win Prizes",
        desc: "Top traders share the prize pool. Instant payouts directly to your wallet."
    }
];

const HowItWorks = () => {
    return (
        <section style={{ padding: '60px 0', background: 'var(--bg-color)' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="badge"
                    >
                        Easy Start
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', marginTop: '16px' }}
                    >
                        How It Works
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    position: 'relative'
                }}>
                    {/* Connection Line */}
                    <div style={{
                        position: 'absolute',
                        top: '100px',
                        left: '16%',
                        right: '16%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                        opacity: 0.2,
                        zIndex: 0
                    }}></div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                background: 'var(--surface)',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid var(--panel-border)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'var(--bg-color)',
                                borderRadius: '50%',
                                display: 'grid',
                                placeItems: 'center',
                                margin: '0 auto 32px auto',
                                border: '1px solid var(--panel-border)',
                                boxShadow: '0 0 40px var(--primary-glow)'
                            }}>
                                <step.icon size={32} color="var(--primary)" />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-dim)', lineHeight: 1.6 }}>{step.desc}</p>

                            {i < 2 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-32px',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--text-muted)',
                                    display: 'none' // Hidden on specific breakpoints if needed, but keeping simple for now
                                }}>
                                    <ArrowRight />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
