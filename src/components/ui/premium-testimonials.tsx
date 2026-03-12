import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Search, BarChart3, Clock, DollarSign } from 'lucide-react';

const findings = [
    {
        title: "The Hidden Channel",
        description: "Marketing budget allocated to a channel that analytics reported as the #2 revenue driver. Forensic data extraction revealed it was producing zero qualified pipeline. Budget reallocated.",
        outcome: "Cost recovered within 60 days.",
        icon: Search,
    },
    {
        title: "The Invisible Handoff",
        description: "Sales pipeline showed a 22% close rate. Forensic staff interviews revealed that 40% of qualified leads were never contacted due to a CRM routing gap. Not a performance problem.",
        outcome: "A systems problem.",
        icon: BarChart3,
    },
    {
        title: "The Manual Ceiling",
        description: "Operations team logging 60+ hours per week. Forensic task audit revealed 35% of that time spent on work that AI systems could own entirely. No headcount change.",
        outcome: "Capacity unlocked.",
        icon: Clock,
    },
    {
        title: "The Buried Revenue",
        description: "Existing client accounts contained upsell and cross-sell opportunities that no current report surfaced. Forensic data mapping identified recoverable revenue.",
        outcome: "Representing 12% of current top line.",
        icon: DollarSign,
    },
];

export function PremiumTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % findings.length);
        }, 8000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            scale: 0.95,
        })
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut' as any
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % findings.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + findings.length) % findings.length);
    };

    return (
        <section id="findings" className="relative py-32 bg-[#0D1321] text-[#FFFAF1] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D37B07]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#93A4AF]/5 rounded-full blur-[120px]" />
            </div>

            <motion.div
                ref={containerRef}
                className="relative z-10 max-w-7xl mx-auto px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D37B07]/10 border border-[#D37B07]/20 text-[#D37B07] text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Sparkles className="h-3 w-3" />
                        <span>What Becomes Visible</span>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUp}
                        className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight"
                    >
                        What the Investigation Surfaces
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-[#93A4AF] leading-relaxed"
                    >
                        Every engagement is unique. The pattern is not. Here is what a forensic audit typically reveals inside a $1M-to-$10M founder-led business.
                    </motion.p>
                </div>

                {/* Carousel Card */}
                <div className="relative max-w-5xl mx-auto mb-16">
                    <div className="relative h-[480px] md:h-[400px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className="absolute inset-0"
                            >
                                <div 
                                    className="glass-card relative h-full bg-[#1A233B]/40 backdrop-blur-xl rounded-3xl border border-[#FFFAF1]/10 p-8 md:p-14 overflow-hidden group shadow-2xl transform-gpu"
                                    style={{ willChange: 'transform, opacity' }}
                                >
                                    <div className="relative z-10 h-full flex flex-col md:flex-row items-start md:items-center gap-10">
                                        {/* Icon Space */}
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#D37B07]/10 border border-[#D37B07]/20 flex items-center justify-center shadow-lg">
                                                {(() => {
                                                    const Icon = findings[currentIndex].icon;
                                                    return <Icon className="w-10 h-10 md:w-12 md:h-12 text-[#D37B07]" />;
                                                })()}
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex-1">
                                            <h3 className="text-3xl md:text-4xl font-bold text-[#FFFAF1] mb-6 tracking-tight">
                                                {findings[currentIndex].title}
                                            </h3>
                                            
                                            <p className="text-xl md:text-2xl text-[#93A4AF] leading-relaxed mb-10 font-normal">
                                                {findings[currentIndex].description}
                                            </p>

                                            <div className="pt-8 border-t border-[#FFFAF1]/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-[#D37B07] shadow-[0_0_10px_rgba(211,123,7,0.8)]" />
                                                    <span className="text-[#D37B07] font-black text-sm uppercase tracking-widest">
                                                        Outcome: {findings[currentIndex].outcome}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-8 mt-12">
                        <motion.button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 backdrop-blur-sm text-[#FFFAF1] hover:bg-[#D37B07]/10 hover:border-[#D37B07]/50 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </motion.button>

                        <div className="flex gap-4">
                            {findings.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#D37B07]' : 'w-2 bg-[#FFFAF1]/20'}`}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 backdrop-blur-sm text-[#FFFAF1] hover:bg-[#D37B07]/10 hover:border-[#D37B07]/50 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
