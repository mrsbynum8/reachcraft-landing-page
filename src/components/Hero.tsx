import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { StarsBackground } from './ui/StarsBackground';

interface HeroProps {
    onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-32 bg-[#0D1321] overflow-x-hidden">
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
                    <span className="text-sm font-semibold text-[#FFFAF1] uppercase tracking-wider">AI-Enhanced Forensic Investigation</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 80 }}
                    className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[4rem] font-black tracking-tight leading-[1.05] max-w-5xl"
                >
                    <span className="text-[#FFFAF1]">Your Business Is Profitable. It's Also Leaking Money Every Month.</span><br />
                    <span className="relative inline-block mt-4 lg:mt-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D37B07] via-[#E8920F] to-[#D37B07] bg-[length:200%_auto] animate-gradient-x">
                            Both Things Are True.
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg md:text-xl lg:text-2xl text-[#93A4AF] max-w-4xl font-normal leading-relaxed mt-4"
                >
                    <p>
                        Revenue is real. The team is working. Clients are paying. And something is still quietly consuming your margin, your time, and your operational capacity. That gap between what your business looks like from the outside and what it costs to run from the inside: that is what we investigate.
                    </p>
                </motion.div>

                {/* CTA Group */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 mt-10"
                >
                    <Button 
                        onClick={onOpenBooking}
                        size="lg" 
                        className="h-16 px-10 text-lg font-bold rounded-full bg-[#D37B07] hover:bg-[#E8920F] text-[#0D1321] shadow-[0_0_60px_-15px_rgba(211,123,7,0.6)] group border-none transition-all duration-300 hover:shadow-[0_0_80px_-10px_rgba(211,123,7,0.8)] hover:scale-105"
                    >
                        Book Your Fit Call
                        <ArrowRight className="ml-2.5 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </Button>

                    <a href="#showcase">
                        <Button variant="ghost" size="lg" className="h-16 px-10 text-lg font-semibold rounded-full text-[#FFFAF1] border border-[#FFFAF1]/20 hover:bg-[#FFFAF1]/5 hover:border-[#FFFAF1]/40 transition-all duration-300">
                            See What We Find
                        </Button>
                    </a>
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
                        <span>Human-Led, AI-Enhanced</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>2-to-8 Week Investigation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Limited Engagements Per Quarter</span>
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
