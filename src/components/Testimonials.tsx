import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "Chikezie delivered a powerful platform that exceeded our expectations. His technical ability and attention to detail made the entire development process smooth.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        name: "Sarah Chen",
        role: "Product Lead at TechFlow",
    },
    {
        text: "Working with Chikezie was a great experience. He understands both technology and product thinking.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
        name: "David Miller",
        role: "CTO at Nexus AI",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
    return (
        <section className="bg-[#0B1121] py-24 relative overflow-hidden">
            <div className="max-w-[1200px] z-10 mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="border border-[#00d4ff]/30 text-[#00d4ff] bg-[#00d4ff]/5 py-1.5 px-5 rounded-full text-xs font-semibold tracking-wide uppercase">
                            Testimonials
                        </div>
                    </div>

                    <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white mb-4">
                        What people say about working with me
                    </h2>
                    <p className="text-slate-400 text-[15px] md:text-[16px]">
                        Hear from the founders and teams I've partnered with.
                    </p>
                </motion.div>

                {/* Animated Columns */}
                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
                </div>

            </div>
        </section>
    );
}
