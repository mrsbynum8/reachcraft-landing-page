
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveMap, RoadmapPoint } from './ui/InteractiveMap';

const ROADMAP_POINTS: RoadmapPoint[] = [
    {
        id: 1,
        label: "Marketing Void",
        status: "active",
        x: "28%",
        y: "62%", // Bottom Left
        labelAlign: "left",
        title: "The Marketing Void",
        description: "Your ad spend is evaporating. We identify exactly where your funnel leaks compliant user data vs. high-intent leads."
    },
    {
        id: 2,
        label: "Sales Friction",
        status: "inactive",
        x: "45%",
        y: "61%", // Moved DOWN further (58% -> 61%)
        title: "Sales Velocity Drag",
        description: "Manual follow-ups are killing your close rate. Our audit reveals the exact delay cost of your current human-first sales Ops."
    },
    {
        id: 3,
        label: "Ops Bottleneck",
        status: "inactive",
        x: "60%",
        y: "36%", // Moved UP further (40% -> 36%)
        labelAlign: "left", // Alternating to Left
        title: "Operational Friction",
        description: "Your team is drowning in admin. We map the repetitive tasks that AI agents could handle instantly, freeing up 40% of payroll time."
    },
    {
        id: 4,
        label: "Revenue Leak",
        status: "inactive",
        x: "72%",
        y: "28%", // Top Right
        title: "Revenue Leakage",
        description: "Compound inefficiencies are costing you 15-20% of topline revenue. We pinpoint the exact dollar amount you're losing daily."
    },
];

export function FeatureShowcase() {
    const [activeId, setActiveId] = useState(1);
    const activeFeature = ROADMAP_POINTS.find(p => p.id === activeId) || ROADMAP_POINTS[0];

    return (
        <section className="h-full flex items-center bg-[#0D1321] relative overflow-hidden text-left">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content - Dynamic Info */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFFAF1] mb-6 leading-tight">
                                The Path to <span className="text-[#D37B07]">Clarity</span>
                            </h2>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="min-h-[160px]"
                                >
                                    <h3 className="text-2xl text-[#D37B07] font-bold mb-4 flex items-center gap-3">
                                        <div className="w-8 h-1 bg-[#D37B07]" />
                                        {activeFeature.title}
                                    </h3>
                                    <p className="text-xl text-[#93A4AF] leading-relaxed mb-8">
                                        {activeFeature.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex flex-col sm:flex-row gap-4 mt-4 flex-wrap">
                                {ROADMAP_POINTS.map(point => (
                                    <button
                                        key={point.id}
                                        onClick={() => setActiveId(point.id)}
                                        className={`text-left px-4 py-3 rounded-lg border transition-all duration-300 ${activeId === point.id
                                            ? "bg-[#D37B07]/10 border-[#D37B07] text-[#FFFAF1]"
                                            : "bg-transparent border-[#FFFAF1]/10 text-[#93A4AF] hover:bg-[#FFFAF1]/5"
                                            }`}
                                    >
                                        <span className="font-semibold block">{point.label}</span>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Interactive Map */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative p-2 md:p-6 mb-12 lg:mb-0">
                            <InteractiveMap
                                points={ROADMAP_POINTS}
                                activePointId={activeId}
                                onPointClick={setActiveId}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
