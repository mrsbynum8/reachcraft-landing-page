import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "ReachCraft didn't just give us a report — it gave us a mirror. We found $120k in annual savings hiding in plain sight.",
        author: "Sarah Chen",
        title: "CEO, Nexus Ventures",
    },
    {
        quote: "The audit surfaced issues my team was too close to see. Within 6 weeks, our close rate jumped from 12% to 28%.",
        author: "Marcus Williams",
        title: "Founder, Veloce Labs",
    },
    {
        quote: "Best part? No 47-page PDF. Just a prioritized list of what to fix, ranked by impact. We knew exactly where to start.",
        author: "Priya Sharma",
        title: "COO, Fintech Startup",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-[#D37B07] uppercase tracking-widest mb-4 block"
                    >
                        What Founders Say
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-5xl font-bold text-[#FFFAF1]"
                    >
                        Trusted by <span className="text-[#D37B07]">Ambitious</span> Founders
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass-card p-8 group"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-10 h-10 text-[#D37B07]/30 mb-6 group-hover:text-[#D37B07]/50 transition-colors" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-[#D37B07] fill-[#D37B07]" />
                                ))}
                            </div>

                            <p className="text-[#FFFAF1] text-lg leading-relaxed mb-8 font-medium">"{t.quote}"</p>

                            <div className="mt-auto">
                                <p className="font-bold text-[#FFFAF1]">{t.author}</p>
                                <p className="text-sm text-[#93A4AF]">{t.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
