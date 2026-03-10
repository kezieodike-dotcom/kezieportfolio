import React from "react";
import { motion } from "motion/react";
import { CopySlash, ServerCog, Paintbrush, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0B1121] relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
            About <span className="text-[#00d4ff]">Me</span>
          </h2>
          <p className="text-slate-400 text-[15px] md:text-[16px]">
            Technology is powerful when it solves real problems.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">

          {/* Left Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-[24px] font-bold mb-6">Building Digital Solutions Built for Growth</h3>

            <div className="space-y-4 text-slate-300 text-[15px] md:text-[16px] leading-[1.7] mb-10">
              <p>
                I specialize in building modern digital systems that help founders, businesses, and organizations bring their ideas to life. From intelligent AI-driven platforms to scalable web applications, I focus on creating solutions that are efficient, reliable, and built for long-term growth.
              </p>
              <p>
                Chikezie Emmanuel is a Fullstack Software Developer and AI Systems Engineer focused on building scalable digital platforms and intelligent systems. His work centers on helping founders, startups, and organizations transform innovative ideas into real, functional technology products.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-8 mb-8">
              <div className="text-center">
                <p className="text-[#00d4ff] text-[32px] font-bold mb-1">50+</p>
                <p className="text-slate-400 text-[13px] font-medium">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-[#00d4ff] text-[32px] font-bold mb-1">3+</p>
                <p className="text-slate-400 text-[13px] font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-[#00d4ff] text-[32px] font-bold mb-1">20+</p>
                <p className="text-slate-400 text-[13px] font-medium">Technologies</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-slate-400 italic text-[15px]">
              "I believe in writing code that's not just functional, but also maintainable, scalable, and a joy to work with."
            </p>
          </motion.div>

          {/* Right Column: 2x2 Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            <FeatureCard
              icon={<CopySlash className="size-6 mb-4 text-white" />}
              title="Frontend"
              desc="React, Next.js, TypeScript"
            />
            <FeatureCard
              icon={<ServerCog className="size-6 mb-4 text-white" />}
              title="Backend"
              desc="Node.js, Express, Prisma"
            />
            <FeatureCard
              icon={<Paintbrush className="size-6 mb-4 text-white" />}
              title="Design"
              desc="Tailwind CSS, UI/UX"
            />
            <FeatureCard
              icon={<Rocket className="size-6 mb-4 text-white" />}
              title="DevOps"
              desc="Vercel, AWS, Docker"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="feature-card p-6 aspect-square flex flex-col justify-center">
      {icon}
      <h4 className="text-white font-bold text-[18px] mb-2">{title}</h4>
      <p className="text-slate-400 text-[14px] leading-relaxed">{desc}</p>
    </div>
  );
}
