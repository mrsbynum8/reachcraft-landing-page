import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Map, Cpu, Zap } from 'lucide-react';

const STEPS = [
    {
        id: 1,
        title: "Clinical Intake",
        description: "A 15-minute mutual fit assessment. We determine whether the forensic investigation is the right next step for your business. If it isn't, we say so directly. This is not an introduction. It is a clinical intake.",
        icon: Search,
        color: "#D37B07"
    },
    {
        id: 2,
        title: "Data Extraction & Staff Interviews",
        description: "We interview your full staff. We extract and analyze data from your core systems: CRM, fulfillment, finance. We map the gap between what your business believes is happening and what the data confirms.",
        icon: Map,
        color: "#3B82F6"
    },
    {
        id: 3,
        title: "Forensic Analysis",
        description: "We run the full diagnostic across marketing, sales, operations, and revenue. The output identifies the exact intersections where AI can add measurable profit, recover lost margin, buy back leadership time, reduce execution effort, and eliminate operational drag.",
        icon: Cpu,
        color: "#10B981"
    },
    {
        id: 4,
        title: "The Deliverable",
        description: "You receive one sequenced, prioritized action plan. Every recommendation is traceable to verified evidence. No theory. No guesswork. A map with coordinates.",
        icon: Zap,
        color: "#8B5CF6"
    }
];

export function ProcessTimeline() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Move from 0% to -55% to center the last card at the end of scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section id="process" ref={targetRef} className="relative h-[400vh] bg-[#0D1321] z-10 overflow-x-hidden">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#0D1321] transform-gpu isolate">
                <div className="container mx-auto px-6">
                    <div className="mb-12 md:mb-20 max-w-4xl">
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-[#FFFAF1] mb-6">
                            The <span className="text-[#D37B07]">Investigation</span>
                        </h2>
                        <p className="text-xl text-[#93A4AF] max-w-3xl">
                            A 2-to-8 week forensic engagement. Human-led, AI-enhanced. Every finding traceable to verified evidence.
                        </p>
                    </div>

                    <div className="relative">
                        <motion.div style={{ x }} className="flex gap-8 md:gap-12 w-max px-4 will-change-transform transform-gpu">
                            {STEPS.map((step) => (
                                <div
                                    key={step.id}
                                    className="relative h-[50vh] md:h-[60vh] w-[85vw] md:w-[600px] flex-shrink-0 rounded-[2rem] bg-[#1A233B] border border-[#FFFAF1]/10 p-8 md:p-12 flex flex-col justify-end overflow-hidden group hover:border-[#D37B07]/50 transition-colors duration-500"
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                                        style={{ background: `radial-gradient(circle at top right, ${step.color}, transparent 70%)` }}
                                    />

                                    {/* Icon */}
                                    <div className="absolute top-8 right-8 md:top-12 md:right-12 text-[#FFFAF1]/20 group-hover:text-[#FFFAF1]/40 transition-colors duration-500 group-hover:scale-110 transform">
                                        <step.icon size={120} strokeWidth={1} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <span className="inline-block px-4 py-2 rounded-full bg-[#FFFAF1]/5 border border-[#FFFAF1]/10 text-sm font-mono text-[#D37B07] mb-6">
                                            PHASE 0{step.id}
                                        </span>
                                        <h3 className="text-3xl md:text-5xl font-bold text-[#FFFAF1] mb-6">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-[#93A4AF] leading-relaxed mb-8">
                                            {step.description}
                                        </p>
                                        <div className="h-1 w-24 bg-[#D37B07] rounded-full opacity-50 group-hover:w-full transition-all duration-700 ease-out" />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
