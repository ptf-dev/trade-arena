import { motion } from 'framer-motion';
import { Wallet, Unlock, Brain, Crown } from 'lucide-react';

const features = [
    {
        icon: Wallet,
        title: "No Entry Fees",
        description: "Start competing without spending a dime. Pure skill, zero financial barrier."
    },
    {
        icon: Unlock,
        title: "No Strict Rules",
        description: "Freedom to trade. No arbitrary drawdowns or complex constraints."
    },
    {
        icon: Brain,
        title: "Trade Your Strategy",
        description: "Scalping, swinging, or hedging—your style, your rules."
    },
    {
        icon: Crown,
        title: "100% Autonomy",
        description: "Complete control over your trading decisions and account management."
    },
];

const KeyFeatures = () => {
    return (
        <section className="section-container" style={{ position: 'relative', zIndex: 10, padding: '80px 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        marginBottom: '24px',
                        lineHeight: 1.1
                    }}
                >
                    Why Top Traders <br />
                    <span className="text-gradient">Choose The Arena</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        color: 'var(--text-dim)',
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}
                >
                    Experience the freedom of true trading competition. No barriers, just performance.
                </motion.p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{
                            padding: '32px',
                            transition: 'var(--transition-smooth)',
                            cursor: 'default'
                        }}
                    >
                        <div style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            background: 'rgba(0, 102, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                            color: 'var(--primary)'
                        }}>
                            <feature.icon size={28} />
                        </div>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            marginBottom: '12px',
                            color: 'var(--text-main)'
                        }}>
                            {feature.title}
                        </h3>
                        <p style={{
                            color: 'var(--text-dim)',
                            lineHeight: 1.6
                        }}>
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;
