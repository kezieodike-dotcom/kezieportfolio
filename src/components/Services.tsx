import { motion } from "motion/react";
import { Globe, Settings, Plug, Zap, Code, Rocket } from "lucide-react";

export default function Services() {
    const servicesData = [
        {
            number: "01",
            icon: <Zap className="size-6 text-white" />,
            title: "AI Application Development",
            desc: "I build AI-powered applications that automate processes, enhance productivity, and deliver intelligent solutions for businesses and organizations.",
        },
        {
            number: "02",
            icon: <Globe className="size-6 text-white" />,
            title: "Web Platform Development",
            desc: "From simple websites to complex web applications, I design and develop scalable platforms that deliver modern user experiences and strong performance.",
        },
        {
            number: "03",
            icon: <Rocket className="size-6 text-white" />,
            title: "Startup MVP Development",
            desc: "If you have an idea for a product, I can help transform it into a functional Minimum Viable Product (MVP) that allows you to validate your concept and move toward market success.",
        },
        {
            number: "04",
            icon: <Settings className="size-6 text-white" />,
            title: "Technical Product Architecture",
            desc: "I help founders design the technical structure of their platforms to ensure they are scalable, efficient, and ready for growth.",
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#0B1121] relative">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                        Services I <span className="text-[#00d4ff]">Offer</span>
                    </h2>
                    <p className="text-slate-400 text-[15px] md:text-[16px]">
                        Comprehensive solutions tailored to your needs
                    </p>
                </div>

                {/* Services Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="feature-card p-8 min-h-[260px] flex flex-col items-start"
                        >
                            {/* Top Row: Number & Icon */}
                            <div className="w-full flex justify-between items-start mb-6">
                                <span className="text-[40px] font-bold text-white/5 leading-none">
                                    {service.number}
                                </span>
                                {service.icon}
                            </div>

                            {/* Title & Desc */}
                            <h3 className="text-white font-bold text-[18px] mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 text-[14px] leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
