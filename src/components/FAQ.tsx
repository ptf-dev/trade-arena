import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div
            style={{
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}
        >
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '24px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--text-main)' : 'var(--text-dim)',
                    transition: 'color 0.3s ease'
                }}
            >
                <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {question}
                </span>
                <span style={{
                    marginLeft: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: isOpen ? '1px solid var(--primary-glow)' : '1px solid rgba(255,255,255,0.1)',
                    color: isOpen ? 'var(--primary)' : 'var(--text-dim)',
                    backgroundColor: isOpen ? 'rgba(0, 102, 255, 0.1)' : 'transparent',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'all 0.3s ease'
                }}>
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            paddingBottom: '24px',
                            color: 'var(--text-muted)',
                            lineHeight: 1.6,
                            fontSize: '1rem'
                        }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default

    const faqs = [
        {
            question: "What Is Livetradingleague?",
            answer: "Livetradingleague is a premier competitive trading platform where traders can showcase their skills in simulated environments, compete in leagues, and earn real rewards based on their performance."
        },
        {
            question: "What Is a Trading Challenge?",
            answer: "The Trading Challenge is an evaluation program designed to help you learn trading and demonstrate your skills on demo accounts. Our challenges are structured with specific rules, allowing us to identify the most skilled traders for our evaluation program."
        },
        {
            question: "What Are the Leverages?",
            answer: "We offer competitive leverage options up to 1:100 for Forex pairs and varied leverage for other instruments, ensuring you have the flexibility to execute your trading strategies effectively while managing risk."
        },
        {
            question: "Holding Trades Over the Weekend",
            answer: "Yes, you are allowed to hold trades over the weekend. We understand that swing trading strategies often require longer holding periods, and we want to support diverse trading styles."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section-container" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '60px',
                alignItems: 'start'
            }}>
                {/* Left Side: Header */}
                <div>
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>
                            Frequently Asked <br />
                            <span className="text-gradient">Questions</span>
                        </h2>
                        <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '400px' }}>
                            Something left unanswered? Check out the full FAQs for detailed information about our platform and rules.
                        </p>
                        <button className="btn-primary">
                            <span>More FAQs</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Right Side: Accordion */}
                <div>
                    <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px' }}>
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
