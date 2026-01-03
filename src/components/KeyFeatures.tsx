import { motion } from 'framer-motion';
import { Wallet, Unlock, Brain, Crown, Zap, Globe } from 'lucide-react';

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
    {
        icon: Zap,
        title: "Zero Stress",
        description: "Focus on pips, not penalties. No fear of breaking hidden firm rules."
    },
    {
        icon: Globe,
        title: "Global Leaderboard",
        description: "Rank publicly based purely on your performance metrics."
    }
];

const KeyFeatures = () => {
    return (
        <section className="section-container relative z-10 py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Why Top Traders <br />
                    <span className="text-gradient">Choose The Arena</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto"
                >
                    Experience the freedom of true trading competition. No barriers, just performance.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-8 hover:bg-white/5 transition-colors group cursor-default"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-7 h-7 text-[#0066FF]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#0066FF] transition-colors">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default KeyFeatures;
