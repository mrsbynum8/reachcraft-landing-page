import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO, Nexus Ventures",
        company: "Nexus",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "ReachCraft transformed our entire operation. We've seen a 300% increase in efficiency and saved over $2M in operational costs. The diagnostic was spot on.",
        results: ["300% efficiency increase", "$2M cost savings", "24/7 automation"]
    },
    {
        name: "Marcus Johnson",
        role: "CTO, DataDrive Inc",
        company: "DataDrive",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "The strategic roadmap was revolutionary. Our customer satisfaction increased by 40% while reducing execution time from months to weeks. Incredible ROI.",
        results: ["40% satisfaction boost", "Fast execution", "Seamless integration"]
    },
    {
        name: "Elena Rodriguez",
        role: "VP Operations, ScaleUp Co",
        company: "ScaleUp",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "From workflow analysis to implementation, ReachCraft handles everything. Our team can finally focus on strategy instead of repetitive fire-fighting.",
        results: ["Full automation", "Strategic focus", "Team productivity"]
    },
    {
        name: "David Kim",
        role: "Founder, GrowthLab",
        company: "GrowthLab",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "The custom systems delivered results beyond our expectations. Revenue increased 150% while operational overhead decreased significantly.",
        results: ["150% revenue growth", "Reduced overhead", "Scalable systems"]
    },
    {
        name: "Lisa Thompson",
        role: "Director, InnovateCorp",
        company: "InnovateCorp",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Exceptional insights that actually work. The implementation was smooth, and the results were immediate. Best investment we've made.",
        results: ["Immediate results", "Smooth integration", "High ROI"]
    }
];

export function PremiumTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 10000); // Slowed down to 10s per user request

        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.86, 0.39, 0.96]
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="relative py-32 bg-[#0D1321] text-[#FFFAF1] overflow-hidden">
            {/* Enhanced Background Effects - Using Brand Colors */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated gradient mesh */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#1A233B] via-[#0D1321] to-[#1A233B]"
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundSize: '400% 400%'
                    }}
                />

                {/* Moving light orbs - Brand Ochre/Steel */}
                <motion.div
                    className="absolute top-1/3 left-1/5 w-72 h-72 bg-[#D37B07]/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 150, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-[#93A4AF]/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -60, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#D37B07]/30 rounded-full"
                        style={{
                            left: `${15 + (i * 7)}%`,
                            top: `${25 + (i * 5)}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 2, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            <motion.div
                ref={containerRef}
                className="relative z-10 max-w-7xl mx-auto px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#D37B07]/10 border border-[#D37B07]/20 backdrop-blur-sm mb-6"
                        whileHover={{ scale: 1.05, borderColor: "rgba(211, 123, 7, 0.4)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="h-4 w-4 text-[#D37B07]" />
                        </motion.div>
                        <span className="text-sm font-medium text-[#FFFAF1]/90">
                            ✨ Client Success Stories
                        </span>
                        <div className="w-2 h-2 bg-[#D37B07] rounded-full animate-pulse" />
                    </motion.div>

                    <motion.h2
                        className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
                        variants={fadeInUp}
                    >
                        <span className="text-[#FFFAF1]">
                            Trusted by
                        </span>
                        <br />
                        <motion.span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-[#D37B07] via-[#E8920F] to-[#D37B07]"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
                            Ambitious Founders
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-xl sm:text-2xl text-[#93A4AF] max-w-4xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Join thousands of businesses already transforming their operations with our intelligence.
                    </motion.p>
                </motion.div>

                {/* Main Testimonial Display */}
                <div className="relative max-w-6xl mx-auto mb-16">
                    <div className="relative h-[600px] md:h-[450px] perspective-1000">
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
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 },
                                    rotateY: { duration: 0.6 }
                                }}
                                className="absolute inset-0"
                            >
                                <div className="glass-card relative h-full bg-[#1A233B]/40 backdrop-blur-xl rounded-3xl border border-[#FFFAF1]/10 p-8 md:p-12 overflow-hidden group">
                                    {/* Animated background gradient */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-[#D37B07]/5 via-transparent to-[#93A4AF]/5 rounded-3xl"
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{
                                            backgroundSize: '300% 300%'
                                        }}
                                    />

                                    {/* Quote icon */}
                                    <motion.div
                                        className="absolute top-8 right-8 opacity-10"
                                        animate={{ rotate: [0, 10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        <Quote className="w-16 h-16 text-[#FFFAF1]" />
                                    </motion.div>

                                    <div className="relative z-10 h-full flex flex-col md:flex-row items-center gap-8">
                                        {/* User Info */}
                                        <div className="flex-shrink-0 text-center md:text-left">
                                            <motion.div
                                                className="relative mb-6"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#1A233B] relative shadow-lg">
                                                    <img
                                                        src={testimonials[currentIndex].avatar}
                                                        alt={testimonials[currentIndex].name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-br from-[#D37B07]/20 to-[#93A4AF]/20"
                                                        animate={{ opacity: [0, 0.3, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                    />
                                                </div>

                                                {/* Floating ring animation */}
                                                <motion.div
                                                    className="absolute inset-0 border-2 border-[#D37B07]/30 rounded-full"
                                                    animate={{
                                                        scale: [1, 1.4, 1],
                                                        opacity: [0.5, 0, 0.5]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                />
                                            </motion.div>

                                            <h3 className="text-2xl font-bold text-[#FFFAF1] mb-2 font-display">
                                                {testimonials[currentIndex].name}
                                            </h3>
                                            <p className="text-[#D37B07] mb-1 font-medium">
                                                {testimonials[currentIndex].role}
                                            </p>
                                            <p className="text-[#93A4AF] mb-4">
                                                {testimonials[currentIndex].company}
                                            </p>

                                            {/* Star Rating */}
                                            <div className="flex justify-center md:justify-start gap-1 mb-6">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1, duration: 0.3 }}
                                                    >
                                                        <Star className="w-5 h-5 fill-[#E8920F] text-[#E8920F]" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <motion.blockquote
                                                className="text-xl md:text-2xl text-[#FFFAF1]/90 leading-relaxed mb-8 font-light italic"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3, duration: 0.8 }}
                                            >
                                                "{testimonials[currentIndex].text}"
                                            </motion.blockquote>

                                            {/* Results */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {testimonials[currentIndex].results.map((result, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="bg-[#FFFAF1]/5 rounded-lg p-3 border border-[#FFFAF1]/10 backdrop-blur-sm"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                                                        whileHover={{ backgroundColor: "rgba(211, 123, 7, 0.1)", borderColor: "rgba(211, 123, 7, 0.3)" }}
                                                    >
                                                        <span className="text-sm text-[#FFFAF1]/80 font-medium">
                                                            {result}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-6 mt-8">
                        <motion.button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 backdrop-blur-sm text-[#FFFAF1] hover:bg-[#D37B07]/20 hover:border-[#D37B07]/50 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots Indicator */}
                        <div className="flex gap-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-[#D37B07] scale-125'
                                        : 'bg-[#FFFAF1]/20 hover:bg-[#FFFAF1]/40'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 backdrop-blur-sm text-[#FFFAF1] hover:bg-[#D37B07]/20 hover:border-[#D37B07]/50 transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>

                {/* Removed Stats Section as per user request */}
            </motion.div>
        </section>
    );
}
