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
            className="border-b border-[rgba(255,255,255,0.05)] last:border-none"
        >
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`ml-4 p-1 rounded-full border transition-all ${isOpen
                        ? 'border-blue-500/50 bg-blue-500/10 text-blue-500 rotate-45'
                        : 'border-white/10 text-gray-400 group-hover:border-white/30 group-hover:text-white'
                    }`}>
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default like screenshot

    const faqs = [
        {
            question: "What Is Livetradingleague?",
            answer: "Livetradingleague is a premier competitive trading platform where traders can showcase their skills in simulated environments, compete in leagues, and earn real rewards based on their performance."
        },
        {
            question: "What Is a Trading Challenge?",
            answer: "The Trading Challenge is an evaluation program designed to help you learn trading and demonstrate your skills on demo accounts. Our challenges are structured with specific rules, allowing us to identify the most skilled traders for our evaluation program. Successful traders will have the opportunity to trade on a demo account with virtual funds and earn rewards based on performance."
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
        <section className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left Side: Header */}
                <div className="lg:col-span-5">
                    <div className="sticky top-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Frequently Asked <br />
                            <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Something left unanswered? Check out the full FAQs for detailed information about our platform and rules.
                        </p>
                        <button className="btn-primary group">
                            <span>More FAQs</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:col-span-7">
                    <div className="glass-panel p-2 md:p-8 rounded-2xl">
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
