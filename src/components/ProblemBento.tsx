import {
    BarChart3,
    Users,
    GitBranch,
    Wallet,
    Megaphone,
    Cpu,
    ArrowUpRight
} from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Marketing",
        description: "You're spending, but you can't trace a dollar to a decision.",
        icon: Megaphone,
        className: "md:col-span-2 md:row-span-1",
    },
    {
        title: "Sales",
        description: "Pipeline looks full. Close rate tells a different story.",
        icon: BarChart3,
        className: "md:col-span-1 md:row-span-2", // Tall card
        featured: true,
    },
    {
        title: "Finance",
        description: "The books balance, but the cash story doesn't add up.",
        icon: Wallet,
        className: "md:col-span-1",
    },
    {
        title: "Operations",
        description: "Processes that made sense at $1M quietly strangle you at $5M.",
        icon: GitBranch,
        className: "md:col-span-1",
    },
    {
        title: "People",
        description: "Your best people are compensating for your worst systems.",
        icon: Users,
        className: "md:col-span-1",
    },
    {
        title: "Systems",
        description: "You've got 14 tools. None of them talk to each other.",
        icon: Cpu,
        className: "md:col-span-1",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export function ProblemBento() {
    return (
        <section className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6">

                <div className="max-w-3xl mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold text-[#D37B07] uppercase tracking-widest mb-4 block"
                    >
                        The Diagnosis
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#FFFAF1]"
                    >
                        Six Areas. <br />
                        <span className="text-[#93A4AF]">One Tangled Truth.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-[#93A4AF] leading-relaxed"
                    >
                        Every founder carries a mental model of their business. But that model has gaps — stitched together from gut feel, secondhand reports, and metrics that tell you what happened, not why.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]"
                >
                    {features.map((item, i) => (
                        <motion.div key={i} variants={itemAnim} className={item.className}>
                            <SpotlightCard
                                className={`h-full group p-7 flex flex-col justify-between cursor-pointer ${item.featured ? '!bg-[#D37B07]/10 !border-[#D37B07]/30' : ''}`}
                            >

                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-auto transition-all duration-300 ${item.featured ? 'bg-[#D37B07]/20 border border-[#D37B07]/40' : 'bg-[#1A233B]/80 border border-[#FFFAF1]/10 group-hover:border-[#D37B07]/40 group-hover:bg-[#D37B07]/10'}`}>
                                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${item.featured ? 'text-[#D37B07]' : 'text-[#93A4AF] group-hover:text-[#D37B07]'}`} />
                                </div>

                                {/* Arrow indicator */}
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                    <ArrowUpRight className="w-5 h-5 text-[#D37B07]" />
                                </div>

                                {/* Content */}
                                <div className="mt-auto">
                                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${item.featured ? 'text-[#FFFAF1]' : 'text-[#FFFAF1] group-hover:text-[#D37B07]'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-[#93A4AF] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
