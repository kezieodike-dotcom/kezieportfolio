"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div
                                    className="feature-card p-8 group"
                                    key={i}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-purple/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="text-slate-300 text-[14px] leading-relaxed relative z-10 group-hover:text-slate-200 transition-colors italic">
                                        "{text}"
                                    </div>
                                    
                                    <div className="flex items-center gap-4 mt-8 relative z-10">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                                            <img
                                                width={44}
                                                height={44}
                                                src={image}
                                                alt={name}
                                                className="h-11 w-11 rounded-full object-cover border-2 border-white/10 group-hover:border-primary/50 transition-colors relative z-10"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-bold text-white tracking-tight leading-5 text-[15px] group-hover:text-gradient transition-all">{name}</div>
                                            <div className="text-[12px] leading-5 text-primary/80 font-medium tracking-tight mt-0.5">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
