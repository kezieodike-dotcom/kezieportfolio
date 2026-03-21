import { motion } from "motion/react";
import { Search, PenTool, Code, ShieldCheck, TrendingUp } from "lucide-react";

export default function WorkProcess() {
    const steps = [
        {
            number: "01",
            title: "Understanding the Idea",
            desc: "I start by understanding the vision, goals, and problems the product aims to solve.",
            icon: <Search className="size-6 text-primary" />,
        },
        {
            number: "02",
            title: "Product Planning & Architecture",
            desc: "Next, I design the system architecture and technical framework required to build the product effectively.",
            icon: <PenTool className="size-6 text-primary" />,
        },
        {
            number: "03",
            title: "Design & Development",
            desc: "The platform is built using modern technologies with attention to performance, usability, and reliability.",
            icon: <Code className="size-6 text-primary" />,
        },
        {
            number: "04",
            title: "Testing & Deployment",
            desc: "Before launch, the system undergoes testing to ensure stability, security, and smooth functionality.",
            icon: <ShieldCheck className="size-6 text-primary" />,
        },
        {
            number: "05",
            title: "Continuous Improvement",
            desc: "After deployment, improvements and updates can be implemented to help the product grow and scale.",
            icon: <TrendingUp className="size-6 text-primary" />,
        },
    ];

    return (
        <section id="process" className="py-24 bg-[#0B1121] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                        My Work <span className="text-primary">Process</span>
                    </h2>
                    <p className="text-slate-400 text-[15px] md:text-[16px]">
                        Every successful product begins with a clear process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="feature-card p-8 group overflow-hidden"
                        >
                            {/* Animated Background Pulse */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                            
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                                    {step.icon}
                                </div>
                                <span className="text-[40px] font-black text-white/5 leading-none tracking-tighter group-hover:text-white/10 transition-colors">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-white font-bold text-[20px] mb-3 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors">
                                {step.desc}
                            </p>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
