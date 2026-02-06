
"use client";

import * as React from "react";
import { motion } from "framer-motion";

// Inline utility
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export interface RoadmapPoint {
    id: number;
    label: string;
    status: "active" | "inactive";
    x: string;
    y: string;
    labelAlign?: 'left' | 'right';
    title: string;
    description: string;
}

interface InteractiveMapProps {
    points: RoadmapPoint[];
    activePointId: number;
    onPointClick: (id: number) => void;
    className?: string;
}

const PointMarker = ({ point, isActive, onClick }: { point: RoadmapPoint; isActive: boolean; onClick: () => void }) => {
    const isLeftAligned = point.labelAlign === 'left';

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: isActive ? 1.3 : 1 }}
            whileHover={{ scale: 1.4 }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center gap-4 group cursor-pointer z-20"
            style={{ left: point.x, top: point.y }}
            onClick={onClick}
        >
            <div className="relative flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
                {/* Pulse effect for active node */}
                {isActive && (
                    <div className="absolute inset-0 rounded-full bg-[#D37B07] animate-ping opacity-50" />
                )}
                <div
                    className={cn(
                        "absolute h-3 w-3 md:h-4 md:w-4 rounded-full border-2 transition-colors duration-300",
                        isActive ? "bg-[#D37B07] border-[#FFFAF1] shadow-[0_0_20px_rgba(211,123,7,0.6)]" : "bg-[#0D1321] border-[#93A4AF]"
                    )}
                />
                {/* Glow halo */}
                <div className={cn(
                    "absolute h-full w-full rounded-full transition-colors duration-300",
                    isActive ? "bg-[#D37B07]/30" : "bg-white/5 group-hover:bg-white/10"
                )} />
            </div>

            {/* Label - Dynamic Alignment */}
            <div className={cn(
                "absolute top-full -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 mt-2 md:mt-0 px-4 py-2 rounded-lg border backdrop-blur-md text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 z-30",
                // Base styling
                isActive
                    ? "bg-[#0D1321] border-[#D37B07] text-[#D37B07] shadow-[0_0_20px_rgba(211,123,7,0.4)] scale-110"
                    : "bg-[#0D1321]/80 border-white/10 text-[#93A4AF] group-hover:border-white/30",
                // Alignment Logic
                isLeftAligned
                    ? "left-1/2 md:right-full md:left-auto md:-translate-x-4" // Left aligned (right of label attached to button)
                    : "left-1/2 md:left-full md:translate-x-4" // Right aligned (default)
            )}>
                {point.label}
            </div>
        </motion.button>
    );
};

export const InteractiveMap = ({ points, activePointId, onPointClick, className }: InteractiveMapProps) => {
    return (
        <div className={cn("relative w-full aspect-square md:aspect-[4/3] overflow-visible", className)}>
            {/* Background Map Image - Full Visibility for 3D Map */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <img
                    src="https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png"
                    alt="AI Audit Roadmap Map"
                    className="w-full h-full object-contain drop-shadow-2xl scale-125 md:scale-110"
                />
            </motion.div>

            {/* Interactive Points */}
            {points.map((point) => (
                <PointMarker
                    key={point.id}
                    point={point}
                    isActive={point.id === activePointId}
                    onClick={() => onPointClick(point.id)}
                />
            ))}
        </div>
    );
};
