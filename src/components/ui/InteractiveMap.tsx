
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
                "absolute px-2 py-1 md:px-4 md:py-2 rounded-lg border text-[10px] md:text-sm font-bold transition-all duration-300 z-30 leading-snug md:whitespace-nowrap flex items-center justify-center",
                // Base styling
                isActive
                    ? "bg-[#0D1321] border-[#D37B07] text-[#D37B07] shadow-[0_0_20px_rgba(211,123,7,0.4)] md:scale-110 scale-105"
                    : "bg-[#0D1321] border-white/10 text-[#93A4AF] group-hover:border-white/30",
                // Alignment Logic
                isLeftAligned
                    ? "right-full mr-2 md:mr-3 w-[76px] sm:w-[90px] md:w-auto text-right md:text-left top-1/2 -translate-y-1/2" 
                    : "left-full ml-2 md:ml-3 w-[76px] sm:w-[90px] md:w-auto text-left top-1/2 -translate-y-1/2"
            )}>
                {point.label}
            </div>
        </motion.button>
    );
};

export const InteractiveMap = ({ points, activePointId, onPointClick, className }: InteractiveMapProps) => {
    return (
        <div className={cn("relative w-full aspect-square md:aspect-[4/3]", className)}>
            {/* Background Map Image - Contained in its own overflow-hidden div */}
            <div
                className="absolute inset-0 flex items-center justify-center"
            >
                <img
                    src="https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png"
                    alt="AI Audit Roadmap Map"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain scale-125 md:scale-110"
                />
            </div>

            {/* Interactive Points - Now free to overflow the container edges */}

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
