import { motion } from "motion/react";
import { Search, PenTool, Code, ShieldCheck, TrendingUp } from "lucide-react";

export default function WorkProcess() {
    const steps = [
        {
            number: "01",
            title: "Understanding the Idea",
            desc: "I start by understanding the vision, goals, and problems the product aims to solve.",
            icon: <Search className="size-6 text-[#00d4ff]" />,
        },
        {
            number: "02",
            title: "Product Planning & Architecture",
            desc: "Next, I design the system architecture and technical framework required to build the product effectively.",
            icon: <PenTool className="size-6 text-[#00d4ff]" />,
        },
        {
            number: "03",
            title: "Design & Development",
            desc: "The platform is built using modern technologies with attention to performance, usability, and reliability.",
            icon: <Code className="size-6 text-[#00d4ff]" />,
        },
        {
            number: "04",
            title: "Testing & Deployment",
            desc: "Before launch, the system undergoes testing to ensure stability, security, and smooth functionality.",
            icon: <ShieldCheck className="size-6 text-[#00d4ff]" />,
        },
        {
            number: "05",
            title: "Continuous Improvement",
            desc: "After deployment, improvements and updates can be implemented to help the product grow and scale.",
            icon: <TrendingUp className="size-6 text-[#00d4ff]" />,
        },
    ];

    return (
        <section id="process" className="py-24 bg-[#0B1121] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                        My Work <span className="text-[#00d4ff]">Process</span>
                    </h2>
                    <p className="text-slate-400 text-[15px] md:text-[16px]">
                        Every successful product begins with a clear process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative p-8 rounded-2xl border border-white/5 bg-[#0f172a]/20 hover:bg-[#0f172a]/40 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
                                    {step.icon}
                                </div>
                                <span className="text-[32px] font-bold text-white/10 leading-none">
                                    {step.number}
                                </span>
                            </div>

                            <h3 className="text-white font-bold text-[20px] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-[15px] leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
