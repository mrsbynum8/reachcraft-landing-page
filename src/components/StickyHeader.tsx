import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Zap } from 'lucide-react';

interface StickyHeaderProps {
    onOpenBooking: () => void;
}

export function StickyHeader({ onOpenBooking }: StickyHeaderProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-4xl z-[100] transform-gpu"
                    style={{ willChange: 'transform, opacity', transform: 'translateX(-50%) translateZ(0)' }}
                >
                    <div className="glass-card !rounded-full px-5 py-3 flex items-center justify-between shadow-2xl !border-[#FFFAF1]/10">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src={`${import.meta.env.BASE_URL}RCALogoVersion3-white.png`}
                                alt="ReachCraft Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </div>

                        {/* CTA */}
                        <Button
                            onClick={onOpenBooking}
                            size="sm" 
                            className="rounded-full bg-[#D37B07] hover:bg-[#E8920F] text-[#0D1321] font-bold px-5 border-none"
                        >
                            Book Your Fit Call
                        </Button>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
