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
            About <span className="text-primary">Me</span>
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
            <h3 className="text-white text-[24px] font-bold mb-6">Turning product ideas into dependable systems</h3>

            <div className="space-y-4 text-slate-300 text-[15px] md:text-[16px] leading-[1.7] mb-10">
              <p>
                I help founders and growing teams turn product ideas into dependable software. My work spans AI-powered applications, scalable web platforms, and the backend systems that keep them fast, useful, and ready to grow.
              </p>
              <p>
                As a Fullstack Software Developer and AI Systems Engineer, I work across product thinking, interface development, APIs, and deployment. The goal is simple: ship technology that solves a real problem and remains maintainable after launch.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/10 py-8 mb-8">
              <div className="text-center">
                <p className="text-primary text-[32px] font-bold mb-1">50+</p>
                <p className="text-slate-400 text-[13px] font-medium">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-primary text-[32px] font-bold mb-1">3+</p>
                <p className="text-slate-400 text-[13px] font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-primary text-[32px] font-bold mb-1">20+</p>
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
              icon={<CopySlash className="size-6 text-cyan-400" />}
              title="Frontend"
              desc="React, Next.js, TypeScript"
              color="cyan"
            />
            <FeatureCard
              icon={<ServerCog className="size-6 text-purple-400" />}
              title="Backend"
              desc="Node.js, Express, Prisma"
              color="purple"
            />
            <FeatureCard
              icon={<Paintbrush className="size-6 text-rose-400" />}
              title="Design"
              desc="Tailwind CSS, UI/UX"
              color="rose"
            />
            <FeatureCard
              icon={<Rocket className="size-6 text-amber-400" />}
              title="DevOps"
              desc="Vercel, AWS, Docker"
              color="amber"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className={`feature-card p-6 aspect-square flex flex-col justify-center group transition-all duration-500 hover:scale-105 ${
      color === 'cyan' ? 'hover:border-cyan-500/30' :
      color === 'purple' ? 'hover:border-purple-500/30' :
      color === 'rose' ? 'hover:border-rose-500/30' :
      'hover:border-amber-500/30'
    }`}>
      <div className={`mb-4 p-3 rounded-xl w-fit bg-slate-800/50 group-hover:scale-110 transition-transform duration-500 ${
        color === 'cyan' ? 'group-hover:bg-cyan-500/10' :
        color === 'purple' ? 'group-hover:bg-purple-500/10' :
        color === 'rose' ? 'group-hover:bg-rose-500/10' :
        'group-hover:bg-amber-500/10'
      }`}>
        {icon}
      </div>
      <h4 className="text-white font-bold text-[18px] mb-2 group-hover:text-gradient transition-all">{title}</h4>
      <p className="text-slate-400 text-[14px] leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</p>
    </div>
  );
}
