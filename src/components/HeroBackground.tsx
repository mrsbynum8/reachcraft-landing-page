import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function HeroBackground() {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 40, stiffness: 80 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth);
            mouseY.set(e.clientY / innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1321] via-[#1A233B] to-[#0D1321]" />

            {/* Animated Gradient Orbs - OPTIMIZED */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#D37B07] opacity-20 blur-[80px]"
                style={{
                    x: useTransform(x, [0, 1], [-30, 30]),
                    y: useTransform(y, [0, 1], [-30, 30]),
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />
            {/* Mouse-Following Spotlight */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full bg-[#D37B07] opacity-10 blur-[90px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"
                style={{
                    left: useTransform(x, [0, 1], ["0%", "100%"]),
                    top: useTransform(y, [0, 1], ["0%", "100%"]),
                    willChange: "left, top",
                    backfaceVisibility: "hidden",
                }}
            />
            <motion.div
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#1A233B] opacity-40 blur-[80px]"
                style={{
                    x: useTransform(x, [0, 1], [40, -40]),
                    y: useTransform(y, [0, 1], [40, -40]),
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#93A4AF] opacity-15 blur-[80px]"
                style={{
                    x: useTransform(x, [0, 1], [-20, 20]),
                    y: useTransform(y, [0, 1], [-20, 20]),
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
            />

            {/* Mesh Grid Lines (subtle) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,250,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,250,241,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Top Fade */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0D1321] to-transparent" />
        </div>
    );
}
