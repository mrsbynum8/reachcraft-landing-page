
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

interface FitCallProps {
    onOpenBooking: () => void;
}

export function FitCall({ onOpenBooking }: FitCallProps) {
    return (
        <section id="intake" className="py-24 md:py-32 relative bg-[#0D1321] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[700px] bg-gradient-radial from-[#D37B07]/5 to-transparent blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="font-display text-5xl md:text-7xl font-black text-[#FFFAF1] mb-8 tracking-tight">
                            The <span className="text-[#D37B07]">Fit Call</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-[#93A4AF] leading-relaxed max-w-3xl mx-auto">
                            The first step is a 15-minute mutual fit assessment. We determine whether the forensic investigation is the right next step for your business. If it isn't, we'll say so directly.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="glass-card p-1 md:p-2 rounded-2xl bg-gradient-to-b from-[#FFFAF1]/10 to-transparent border border-[#FFFAF1]/5 mb-12 shadow-2xl">
                            <Button
                                onClick={onOpenBooking}
                                size="lg"
                                className="h-20 w-full px-10 md:px-16 text-xl md:text-2xl font-black rounded-xl bg-[#D37B07] hover:bg-[#E8920F] text-[#0D1321] shadow-[0_10px_40px_rgba(211,123,7,0.3)] hover:shadow-[0_15px_50px_rgba(211,123,7,0.5)] transition-all duration-300 hover:scale-[1.02] uppercase tracking-wider flex items-center gap-4 justify-center"
                            >
                                <Calendar className="w-6 h-6 md:w-8 md:h-8" />
                                Book Your 15-Minute Fit Call
                            </Button>
                        </div>

                        {/* Qualification Indicators */}
                        <div className="max-w-2xl mx-auto border-t border-[#FFFAF1]/5 pt-12 w-full space-y-6">
                            <div className="flex items-start gap-4 text-[#93A4AF] text-left">
                                <CheckCircle2 className="w-5 h-5 text-[#D37B07] shrink-0 mt-1" />
                                <span className="text-lg">This engagement is built for founder-led businesses doing <strong>$1M to $10M</strong> in annual revenue.</span>
                            </div>

                            <div className="flex items-start gap-4 text-[#93A4AF] text-left">
                                <CheckCircle2 className="w-5 h-5 text-[#D37B07] shrink-0 mt-1" />
                                <span className="text-lg">This is a premium engagement. It starts at <strong>$10,000</strong>.</span>
                            </div>

                            <div className="flex items-start gap-4 text-[#93A4AF] text-left">
                                <AlertCircle className="w-5 h-5 text-[#D37B07] shrink-0 mt-1" />
                                <span className="text-lg">Limited engagements per quarter. <strong>Qualified founders only.</strong></span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
