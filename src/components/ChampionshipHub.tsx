import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Users, ArrowUpRight } from 'lucide-react';
import { CHAMPIONSHIPS } from '../constants';

const ChampionshipHub = () => {
    const [activeTab, setActiveTab] = useState('Weekly');

    return (
        <section id="tournaments" style={{ background: 'linear-gradient(180deg, var(--bg-color) 0%, #0a0a0c 100%)' }}>
            <div className="section-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                                Competitive Hub
                            </span>
                            <h2 style={{ marginTop: '16px' }}>Trading battles</h2>
                        </motion.div>
                    </div>

                    <div style={{
                        display: 'flex',
                        background: 'var(--surface)',
                        padding: '6px',
                        borderRadius: '16px',
                        border: '1px solid var(--panel-border)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        {['Weekly', 'Monthly'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '12px 36px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === tab ? 'var(--primary)' : 'transparent',
                                    color: activeTab === tab ? '#fff' : 'var(--text-dim)',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: activeTab === tab ? '0 4px 12px var(--primary-glow)' : 'none'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
                    <AnimatePresence mode="popLayout">
                        {CHAMPIONSHIPS.filter(c => c.tier === activeTab).map((camp, i) => (
                            <motion.div
                                key={camp.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="tournament-card"
                            >
                                <div style={{ position: 'relative' }}>
                                    <img src={camp.cover} alt={camp.title} className="tournament-card-image" />
                                    <div style={{
                                        position: 'absolute',
                                        top: '24px',
                                        left: '24px',
                                        zIndex: 3,
                                        background: 'rgba(0, 102, 255, 0.15)',
                                        backdropFilter: 'blur(10px)',
                                        color: '#fff',
                                        padding: '6px 16px',
                                        borderRadius: '50px',
                                        border: '1px solid rgba(0, 102, 255, 0.3)',
                                        fontSize: '0.75rem',
                                        fontWeight: 800,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        <Zap size={14} fill="currentColor" /> Trading battle
                                    </div>
                                </div>

                                <div className="tournament-card-content">
                                    <h3 style={{ fontSize: '2rem', marginBottom: '32px', fontWeight: 900 }}>{camp.title}</h3>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '2px',
                                        background: 'var(--panel-border)',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        marginBottom: '32px',
                                        border: '1px solid var(--panel-border)'
                                    }}>
                                        {[
                                            { label: 'Reward', value: camp.prize, color: '#fff' },
                                            { label: 'Entry Fee', value: camp.fee, color: '#fff' },
                                            { label: camp.timeLabel, value: camp.timeLeft.split(' ')[0], color: 'var(--primary)' }
                                        ].map((item, idx) => (
                                            <div key={idx} style={{ background: 'rgba(18, 18, 22, 0.8)', padding: '20px 10px', textAlign: 'center' }}>
                                                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                                                    {item.label}
                                                </div>
                                                <div style={{ fontSize: '1.1rem', fontWeight: 900, color: item.color }}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className="btn-primary"
                                        style={{ width: '100%', height: '64px', fontSize: '1.1rem' }}
                                        onClick={() => window.open(camp.registrationLink, '_blank')}
                                    >
                                        Join Tournament <ArrowUpRight size={20} />
                                    </button>

                                    <div style={{
                                        marginTop: '24px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: 'var(--text-dim)',
                                        fontSize: '0.9rem',
                                        fontWeight: 600
                                    }}>
                                        <Users size={18} color="var(--primary)" />
                                        Players Joined: <span style={{ color: '#fff', fontWeight: 800 }}>{camp.participants.toLocaleString()}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ChampionshipHub;
