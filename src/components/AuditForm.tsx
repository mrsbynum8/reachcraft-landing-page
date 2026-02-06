
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
    "10-minute AI conversation",
    "Full business diagnostic",
    "Prioritized action plan",
    "Results within 48 hours",
];

// Inline shared input styles
const inputClasses = "w-full bg-[#0D1321] border border-[#FFFAF1]/10 rounded-lg px-4 py-3 text-[#FFFAF1] placeholder-[#93A4AF]/50 focus:outline-none focus:border-[#D37B07] focus:ring-1 focus:ring-[#D37B07] transition-all duration-300 hover:border-[#FFFAF1]/20";
const labelClasses = "block text-sm font-medium text-[#93A4AF] mb-2";

export function AuditForm() {
    return (
        <section id="intake" className="py-16 md:py-24 relative overflow-visible bg-[#0D1321]">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[600px] bg-gradient-radial from-[#D37B07]/5 to-transparent blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col gap-12 text-center">

                    {/* Top: Copy & Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FFFAF1] mb-6 leading-tight">
                            Get Your <span className="text-[#D37B07]">AI Audit</span>
                        </h2>
                        <p className="text-xl text-[#93A4AF] mb-8 leading-relaxed max-w-2xl">
                            Join hundreds of founders who've uncovered hidden leverage in their business. No sales call. No obligation. Just clarity.
                        </p>

                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-center gap-2 text-[#FFFAF1]/80">
                                    <CheckCircle2 className="w-5 h-5 text-[#D37B07]" />
                                    <span>{b}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bottom: The Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-2xl mx-auto glass-card p-8 rounded-2xl border border-[#FFFAF1]/10 bg-[#1A233B]/50 backdrop-blur-xl shadow-2xl relative text-left"
                    >
                        {/* Glow behind form */}
                        <div className="absolute -inset-4 bg-[#D37B07] blur-3xl opacity-5 rounded-[3rem] pointer-events-none" />

                        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>

                            <div>
                                <label className={labelClasses}>Full Name</label>
                                <input type="text" placeholder="Jane Doe" className={inputClasses} />
                            </div>

                            <div>
                                <label className={labelClasses}>Email Address</label>
                                <input type="email" placeholder="jane@company.com" className={inputClasses} />
                            </div>

                            <div>
                                <label className={labelClasses}>Company Name</label>
                                <input type="text" placeholder="Acme Inc." className={inputClasses} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClasses}>Your Role</label>
                                    <select className={inputClasses}>
                                        <option value="" disabled selected>Select...</option>
                                        <option>Founder / CEO</option>
                                        <option>CTO / Product</option>
                                        <option>Operations</option>
                                        <option>Marketing</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Revenue</label>
                                    <select className={inputClasses}>
                                        <option value="" disabled selected>Range...</option>
                                        <option>Pre-revenue</option>
                                        <option>$1k - $10k / mo</option>
                                        <option>$10k - $50k / mo</option>
                                        <option>$50k+ / mo</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>What's keeping you up at night?</label>
                                <textarea
                                    placeholder="Be as specific as possible about your bottleneck..."
                                    rows={3}
                                    className={inputClasses}
                                />
                            </div>

                            <Button
                                size="lg"
                                className="w-full h-14 text-lg font-bold rounded-xl bg-[#D37B07] hover:bg-[#E8920F] text-[#0D1321] shadow-[0_4px_20px_rgba(211,123,7,0.3)] hover:shadow-[0_4px_30px_rgba(211,123,7,0.5)] transition-all duration-300 hover:scale-[1.02]"
                            >
                                Request Your Audit
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <p className="text-xs text-center text-[#93A4AF]/50 mt-4">
                                100% Secure. We never share your data.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
