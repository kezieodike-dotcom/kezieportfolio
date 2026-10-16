import { motion } from "motion/react";
import { Globe, Settings, Plug, Zap, Code, Rocket } from "lucide-react";

export default function Services() {
    const servicesData = [
        {
            number: "01",
            icon: <Zap className="size-6 text-cyan-400" />,
            title: "AI Application Development",
            desc: "I build AI-powered applications that automate processes, enhance productivity, and deliver intelligent solutions for businesses and organizations.",
            color: "cyan"
        },
        {
            number: "02",
            icon: <Globe className="size-6 text-purple-400" />,
            title: "Web Platform Development",
            desc: "From simple websites to complex web applications, I design and develop scalable platforms that deliver modern user experiences and strong performance.",
            color: "purple"
        },
        {
            number: "03",
            icon: <Rocket className="size-6 text-rose-400" />,
            title: "Startup MVP Development",
            desc: "If you have an idea for a product, I can help transform it into a functional Minimum Viable Product (MVP) that allows you to validate your concept and move toward market success.",
            color: "rose"
        },
        {
            number: "04",
            icon: <Settings className="size-6 text-amber-400" />,
            title: "Technical Product Architecture",
            desc: "I help founders design the technical structure of their platforms to ensure they are scalable, efficient, and ready for growth.",
            color: "amber"
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#0B1121] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                        Services I <span className="text-gradient">Offer</span>
                    </h2>
                    <p className="text-slate-400 text-[15px] md:text-[16px]">
                        Focused engineering support from first idea to reliable launch
                    </p>
                </div>

                {/* Services Grid: 1 col on mobile, 2 cols on tablet, 2 cols on desktop for 4 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="feature-card group p-8 min-h-[260px] flex flex-col items-start"
                        >
                            {/* Accent Glow */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                                service.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                                service.color === 'purple' ? 'from-purple-500 to-indigo-500' :
                                service.color === 'rose' ? 'from-rose-500 to-pink-500' :
                                'from-amber-500 to-orange-500'
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Top Row: Number & Icon */}
                            <div className="w-full flex justify-between items-start mb-6">
                                <span className="text-[40px] font-bold text-white/5 leading-none group-hover:text-white/10 transition-colors">
                                    {service.number}
                                </span>
                                <div className={`p-3 rounded-xl bg-slate-800/50 border border-white/5 group-hover:scale-110 transition-transform duration-500 ${
                                    service.color === 'cyan' ? 'group-hover:border-cyan-500/30' :
                                    service.color === 'purple' ? 'group-hover:border-purple-500/30' :
                                    service.color === 'rose' ? 'group-hover:border-rose-500/30' :
                                    'group-hover:border-amber-500/30'
                                }`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Title & Desc */}
                            <h3 className="text-white font-bold text-[20px] mb-3 group-hover:text-gradient transition-all">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-[15px] leading-relaxed group-hover:text-slate-300 transition-colors">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
