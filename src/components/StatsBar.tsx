import { motion } from 'framer-motion';

const stats = [
    { label: "Total Paid Out", value: "$2.4M+" },
    { label: "Active Traders", value: "14,240" },
    { label: "Tournaments", value: "152" },
    { label: "Avg. ROI", value: "+28.5%" }
];

const StatsBar = () => {
    return (
        <div style={{
            position: 'relative',
            zIndex: 10,
            background: 'var(--surface)',
            borderTop: '1px solid var(--panel-border)',
            borderBottom: '1px solid var(--panel-border)',
            padding: '20px 0'
        }}>
            <div className="section-container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 style={{
                                fontSize: '2.5rem',
                                fontWeight: 900,
                                color: '#fff',
                                marginBottom: '4px',
                                background: 'linear-gradient(180deg, #fff 0%, #aaa 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {stat.value}
                            </h3>
                            <p style={{
                                color: 'var(--text-dim)',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
