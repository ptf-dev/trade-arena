import { motion } from 'framer-motion';
import {
    ShieldCheck,
    LayoutDashboard,
    PlusCircle,
    FileText,
    Settings,
    X
} from 'lucide-react';

interface ManagerPortalProps {
    onClose: () => void;
}

const ManagerPortal = ({ onClose }: ManagerPortalProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(2, 2, 3, 0.95)', backdropFilter: 'blur(30px)',
                zIndex: 2000, display: 'grid', placeItems: 'center', padding: '24px'
            }}
        >
            <motion.div
                initial={{ scale: 0.9, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 40 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="glass-panel"
                style={{ width: '100%', maxWidth: '1000px', background: 'var(--panel-bg)', border: '1px solid var(--glass-border)', boxShadow: '0 40px 100px rgba(0,0,0,0.8)' }}
            >
                <div style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--panel-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ padding: '12px', background: 'rgba(0, 102, 255, 0.1)', borderRadius: '16px', border: '1px solid rgba(0, 102, 255, 0.2)' }}>
                            <ShieldCheck size={32} color="var(--primary)" />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '4px' }}>Manager Control</h2>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: 600 }}>System Status: <span style={{ color: 'var(--success)' }}>Online</span></p>
                        </div>
                    </div>
                    <button onClick={onClose} style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--panel-border)',
                        color: '#fff',
                        cursor: 'pointer',
                        padding: '12px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        transition: '0.2s'
                    }} className="btn-close-hover">
                        <X size={24} />
                    </button>
                </div>

                <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '60px' }}>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {[
                            { icon: <LayoutDashboard size={20} />, label: "Overview", active: true },
                            { icon: <PlusCircle size={20} />, label: "Launch Tournament" },
                            { icon: <FileText size={20} />, label: "Analytics" },
                            { icon: <Settings size={20} />, label: "Portal Settings" }
                        ].map(item => (
                            <button key={item.label} style={{
                                padding: '16px 20px',
                                background: item.active ? 'rgba(0, 102, 255, 0.1)' : 'transparent',
                                border: item.active ? '1px solid var(--primary)' : '1px solid transparent',
                                color: item.active ? 'var(--primary)' : 'var(--text-muted)',
                                borderRadius: '14px',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: '0.2s'
                            }}>
                                {item.icon} {item.label}
                            </button>
                        ))}
                    </nav>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Active Tournaments</h3>
                            <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                                <PlusCircle size={18} /> New Battle
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[1, 2].map(id => (
                                <div key={id} className="glass-panel" style={{ padding: '24px', background: 'var(--surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '6px' }}>Main Battle Alpha - #{id}00x7</div>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>Players: <span style={{ color: '#fff' }}>{340 * id}</span></span>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>Volume: <span style={{ color: 'var(--success)' }}>$4.2M</span></span>
                                        </div>
                                    </div>
                                    <button className="btn-outline" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>Manage</button>
                                </div>
                            ))}
                        </div>

                        <div style={{
                            marginTop: '40px',
                            padding: '32px',
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.05) 0%, transparent 100%)',
                            border: '1px dashed rgba(0, 102, 255, 0.2)',
                            textAlign: 'center'
                        }}>
                            <p style={{ color: 'var(--text-dim)', fontWeight: 600 }}>Need more slots? <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>Upgrade Tier</span></p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style>{`
        .btn-close-hover:hover {
          background: #25262b;
          border-color: #fff;
        }
      `}</style>
        </motion.div>
    );
};

export default ManagerPortal;
