
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveMap, RoadmapPoint } from './ui/InteractiveMap';

const ROADMAP_POINTS: RoadmapPoint[] = [
    {
        id: 1,
        label: "Marketing Void",
        status: "active",
        x: "31%",
        y: "62%", // Bottom Left
        labelAlign: "left",
        title: "Marketing Void",
        description: "Budget is leaving. You can't verify where qualified demand is actually coming from. The channel reports say one thing. The data says another."
    },
    {
        id: 2,
        label: "Sales Friction",
        status: "inactive",
        x: "45%",
        y: "61%", // Moved DOWN further (58% -> 61%)
        title: "Sales Friction",
        description: "Qualified prospects are reaching your team and going quiet. The conversion gap is wider than your pipeline shows. It's compounding every month, invisibly."
    },
    {
        id: 3,
        label: "Ops Bottleneck",
        status: "inactive",
        x: "60%",
        y: "36%", // Moved UP further (40% -> 36%)
        labelAlign: "left", // Alternating to Left
        title: "Ops Bottleneck",
        description: "Your people are executing work that systems should own. It doesn't show up as a crisis. It shows up as a ceiling you can't explain."
    },
    {
        id: 4,
        label: "Revenue Leak",
        status: "inactive",
        x: "72%",
        y: "28%", // Top Right
        title: "Revenue Leak",
        description: "There's recoverable revenue sitting inside your existing accounts and data right now. It doesn't appear on any report you currently run. It requires a forensic map to surface."
    },
];

export function FeatureShowcase() {
    const [activeId, setActiveId] = useState(1);
    const activeFeature = ROADMAP_POINTS.find(p => p.id === activeId) || ROADMAP_POINTS[0];

    return (
        <section id="showcase" className="min-h-screen flex items-center bg-[#0D1321] relative isolate z-10 text-center pt-12 pb-8 md:pt-24 md:pb-16 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* 1. Header: Headline + Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-[#FFFAF1] mb-6 leading-tight">
                        Where It's Happening <br className="hidden md:block" />
                        <span className="text-[#D37B07]">Inside Your Business</span>
                    </h2>
                    <p className="text-xl text-[#93A4AF] leading-relaxed max-w-2xl mx-auto">
                        In every forensic engagement we run, we find the leak active in at least two of these four places. Usually inside a business that looks healthy from every other angle.
                    </p>
                </motion.div>

                {/* 2. Central Visual: Interactive Map */}
                <div className="relative max-w-5xl mx-auto mb-20">
                    <div className="relative px-4 py-8 md:px-16 md:py-12">
                        <InteractiveMap
                            points={ROADMAP_POINTS}
                            activePointId={activeId}
                            onPointClick={setActiveId}
                        />
                    </div>
                </div>

                {/* 3. Findings Grid: Corresponding Sections */}
                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
                    {ROADMAP_POINTS.map((point) => (
                        <motion.div
                            key={point.id}
                            onMouseEnter={() => setActiveId(point.id)}
                            className={`text-left p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer group ${
                                activeId === point.id
                                    ? "bg-[#D37B07]/10 border-[#D37B07] shadow-[0_0_40px_-10px_rgba(211,123,7,0.2)]"
                                    : "bg-[#1A233B]/40 border-[#FFFAF1]/5 hover:border-[#FFFAF1]/20"
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold border transition-colors ${
                                    activeId === point.id ? "bg-[#D37B07] border-[#D37B07] text-[#0D1321]" : "bg-[#FFFAF1]/5 border-[#FFFAF1]/10 text-[#D37B07]"
                                }`}>
                                    0{point.id}
                                </div>
                                <h3 className={`text-2xl font-bold transition-colors ${
                                    activeId === point.id ? "text-[#FFFAF1]" : "text-[#FFFAF1]/70"
                                }`}>
                                    {point.title}
                                </h3>
                            </div>
                            <p className="text-[#93A4AF] leading-relaxed text-lg">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
