import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "Chikezie's ability to turn complex logic into a seamless user experience is unparalleled. The dashboard he built for us is both beautiful and lightning-fast.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        name: "Sarah Chen",
        role: "Product Lead at TechFlow",
    },
    {
        text: "The full-stack application he delivered exceeded our expectations. His expertise in React and Node.js helped us scale our user base by 300% without a hitch.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop",
        name: "David Miller",
        role: "CTO at Nexus AI",
    },
    {
        text: "Exceptional problem solver. He integrated an LLM-based feature into our existing architecture seamlessly. Truly a forward-thinking developer.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
        name: "Jessica Wu",
        role: "Engineering Manager",
    },
    {
        text: "Clean code, great communication, and a deep understanding of software design patterns. Chikezie is a rare talent in the full-stack space.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
        name: "Marcus Thorne",
        role: "Senior Architect",
    },
    {
        text: "His contribution to our DevOps pipeline saved us hours of manual work. The automation he implemented is robust and extremely reliable.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
        name: "Elena Rodriguez",
        role: "Platform Engineer",
    },
    {
        text: "I was impressed by how quickly he picked up our legacy codebase and refactored it for modern performance standards. Highly recommended.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
        name: "Kevin Park",
        role: "Tech Lead",
    },
    {
        text: "A truly professional software engineer. He doesn't just write code; he thinks about the business impact and scalability from day one.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
        name: "James Wilson",
        role: "Venture Partner",
    },
    {
        text: "The animations and micro-interactions he added made our landing page feel world-class. His eye for detail is second to none.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
        name: "Sofia Giraldo",
        role: "UI/UX Director",
    },
    {
        text: "Reliable, efficient, and technically brilliant. Chikezie is my go-to developer for any complex API integrations or structural shifts.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        name: "Alex Thompson",
        role: "Backend Lead",
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
