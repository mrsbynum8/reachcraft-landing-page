import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { StarsBackground } from './ui/StarsBackground';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32 bg-[#0D1321]">
            <HeroBackground />

            {/* Stars Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <StarsBackground
                    starColor="#93A4AF"
                    speed={100}
                    className="absolute inset-0 opacity-50"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card !bg-[#1A233B]/60 !border-[#D37B07]/30"
                >
                    <Sparkles className="w-4 h-4 text-[#D37B07]" />
                    <span className="text-sm font-semibold text-[#FFFAF1] uppercase tracking-wider">AI-Powered Audit</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 80 }}
                    className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] max-w-5xl"
                >
                    <span className="text-[#FFFAF1]">We Don't Start With</span><br />
                    <span className="text-[#FFFAF1]">Solutions. We Start</span><br />
                    <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D37B07] via-[#E8920F] to-[#D37B07] bg-[length:200%_auto] animate-gradient-x">
                            With the Truth.
                        </span>
                        {/* Underline effect */}
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D37B07] to-transparent origin-left"
                        />
                    </span>
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg md:text-xl lg:text-2xl text-[#93A4AF] max-w-2xl font-normal leading-relaxed mt-4"
                >
                    ReachCraft's AI audit is a structured, AI-driven diagnostic that interviews you about your business — then maps what's working, what's breaking, and what's hiding.
                </motion.p>

                {/* CTA Group */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 mt-10"
                >
                    <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-[#D37B07] hover:bg-[#E8920F] text-[#0D1321] shadow-[0_0_60px_-15px_rgba(211,123,7,0.6)] group border-none transition-all duration-300 hover:shadow-[0_0_80px_-10px_rgba(211,123,7,0.8)] hover:scale-105">
                        Start Your Audit
                        <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </Button>

                    <Button variant="ghost" size="lg" className="h-16 px-10 text-lg font-semibold rounded-full text-[#FFFAF1] border border-[#FFFAF1]/20 hover:bg-[#FFFAF1]/5 hover:border-[#FFFAF1]/40 transition-all duration-300">
                        View Sample Report
                    </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 text-sm text-[#93A4AF]"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available for Qualified Founders</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>10 Minute Interview</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Report in 48 Hours</span>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-[#93A4AF]/50 flex justify-center pt-2"
                >
                    <motion.div className="w-1.5 h-3 rounded-full bg-[#D37B07]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
