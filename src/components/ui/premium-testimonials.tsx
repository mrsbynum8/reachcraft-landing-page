import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Search, BarChart3, Clock, DollarSign } from 'lucide-react';

const findings = [
    {
        title: "The Dashboard Lie",
        description: "Leadership believed conversion was a messaging problem because that is what the CRM dashboard reported. We bypassed the dashboard and analyzed seven months of raw system logs. The truth: 68% of inbound calls never reached a human.",
        outcome: "System corrected. Modeled annual recoverable revenue: $155,000 to $310,000.",
        icon: Search,
        color: "#D37B07"
    },
    {
        title: "The Capacity Illusion",
        description: "Operations requested headcount expansion to manage workload. We forensically mapped daily workflows to separate actual clinical work from system-induced friction. The constraint was not people; it was invisible architecture failing the people.",
        outcome: "Architecture corrected. 7 hours of manual data entry permanently eliminated per week.",
        icon: BarChart3,
        color: "#3B82F6"
    },
    {
        title: "The Incentive Misalignment",
        description: "We do not just audit software; we audit the humans operating it. Staff interviews revealed front-line coordinators were quietly screening out leads marketing paid to generate, protecting their own time to survive their day. Leadership's growth goals and staff survival incentives were in direct conflict.",
        outcome: "Incentives realigned. Only pre-sold patients reached the desk.",
        icon: DollarSign,
        color: "#10B981"
    },
    {
        title: "The Integration Trap",
        description: "Every clinic believes their EMR limits what is possible, and IT vendors exploit this by quoting massive custom builds. Our architectural review identified the exact point of least resistance to secure after-hours demand without paying the integration ransom.",
        outcome: "Capability secured. Break-even at 8 recovered patients.",
        icon: Clock,
        color: "#8B5CF6"
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
        }, 13000);

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
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
        <section id="findings" className="relative pt-4 pb-4 md:pt-8 md:pb-16 bg-[#0D1321] text-[#FFFAF1] overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D37B07]/10 border border-[#D37B07]/20 text-[#D37B07] text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="h-3 w-3" />
                        <span>What Becomes Visible</span>
                    </div>

                    <h2 className="font-display text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
                        What the Investigation Surfaces
                    </h2>

                    <p className="text-xl text-[#93A4AF] leading-relaxed">
                        Every engagement is unique. The pattern is not. Here is what a forensic audit typically reveals inside a $1M-to-$10M founder-led business.
                    </p>
                </div>

                {/* Carousel Card */}
                <div className="relative max-w-5xl mx-auto mb-8">
                    <div className="relative h-[600px] md:h-[400px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", duration: 0.4, ease: "easeInOut" },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0"
                            >
                                <div className="relative h-full bg-[#1A233B] rounded-3xl border border-[#FFFAF1]/10 p-6 md:p-14 overflow-hidden group shadow-xl">
                                    {/* Background Gradient */}
                                    <div
                                        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at top right, ${findings[currentIndex].color}, transparent 70%)` }}
                                    />
                                    <div className="relative z-10 h-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
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
                                            <h3 className="font-display text-2xl md:text-4xl font-bold text-[#FFFAF1] mb-4 md:mb-6 tracking-tight">
                                                {findings[currentIndex].title}
                                            </h3>
                                            
                                            <p className="text-lg md:text-2xl text-[#93A4AF] leading-relaxed mb-6 md:mb-10 font-normal">
                                                {findings[currentIndex].description}
                                            </p>

                                            <div className="pt-8 border-t border-[#FFFAF1]/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-[#D37B07] shadow-[0_0_10px_rgba(211,123,7,0.8)]" />
                                                    <span className="text-[#D37B07] font-bold text-sm italic tracking-wide">
                                                        <i>{findings[currentIndex].outcome}</i>
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
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 backdrop-blur-sm text-[#FFFAF1] hover:bg-[#D37B07]/10 hover:border-[#D37B07]/50 transition-all active:scale-95"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-4">
                            {findings.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#D37B07]' : 'w-2 bg-[#FFFAF1]/20'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 backdrop-blur-sm text-[#FFFAF1] hover:bg-[#D37B07]/10 hover:border-[#D37B07]/50 transition-all active:scale-95"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
