import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#0D1321]/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] glass-card !bg-[#1A233B]/95 !border-[#FFFAF1]/10 shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[#FFFAF1]/5">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#D37B07] animate-pulse" />
                                <span className="text-sm font-bold text-[#FFFAF1] uppercase tracking-widest">Forensic Intake Schedule</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-[#FFFAF1]/5 transition-colors group"
                            >
                                <X className="w-6 h-6 text-[#93A4AF] group-hover:text-[#FFFAF1] transition-colors" />
                            </button>
                        </div>

                        {/* Iframe Container */}
                        <div className="flex-1 w-full bg-[#0D1321]/30 overflow-auto">
                            <iframe 
                                src="https://api.leadconnectorhq.com/widget/booking/v2e5cQFdPunvj8yHvRYT" 
                                style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }} 
                                scrolling="no" 
                                id="j17DVRvrdlGDPRIktKty_1773336876618"
                                title="LeadConnector Booking Widget"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
