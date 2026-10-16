import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    label: "DRIFT HUB",
    title: "AI + Web3 Innovation Platform",
    description:
      "A platform designed to bring together AI innovation and decentralized technology. It enables users to explore intelligent digital solutions and collaborate in a modern digital ecosystem.",
    tags: ["React", "Node.js", "AI Integrations"],
    accentColor: "cyan" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3a9 9 0 0 1 0 18A9 9 0 0 1 12 3z" />
        <path d="M6.3 6.3a9 9 0 0 1 11.4 0" />
        <path d="M6.3 17.7a9 9 0 0 0 11.4 0" />
      </svg>
    ),
  },
  {
    label: "MVP Labs",
    title: "Startup Product Development",
    description:
      "An innovation lab designed to help founders transform their ideas into working digital products. The platform focuses on building scalable MVPs that can grow into full production systems.",
    tags: ["Next.js", "API Systems", "Cloud Infra"],
    accentColor: "purple" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    label: "BAZDON Productions",
    title: "Printing & Branding Platform",
    description:
      "A comprehensive platform for printing and branding services. The website allows customers to place orders, make payments, and monitor the delivery process in real-time.",
    tags: ["React", "Payment Integration", "Architecture"],
    accentColor: "cyan" as const,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="aurora-bg dot-pattern px-8 lg:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Featured Work
          </p>
          <h2 className="text-white font-black text-4xl md:text-5xl leading-tight mb-4">
            Engineering{" "}
            <span style={{ color: "var(--primary)" }}>Projects</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl">
            Selected products and platforms built to make complex work simpler,
            faster, and more dependable.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, idx) => (
            <React.Fragment key={idx}>
              <ProjectCard {...project} delay={idx * 0.1} />
            </React.Fragment>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="btn-cyan flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm tracking-wide">
            <Github className="size-4" />
            View All on GitHub
          </button>
          <button className="btn-outline-white flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm tracking-wide">
            <ExternalLink className="size-4" />
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Project card ──────────────────────────────────────── */
function ProjectCard({
  label,
  title,
  description,
  tags,
  accentColor,
  icon,
  delay = 0,
}: {
  label: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: "cyan" | "purple";
  icon: React.ReactNode;
  delay?: number;
}) {
  const isCyan = accentColor === "cyan";
  const cardClass = isCyan ? "glass-card-cyan" : "glass-card-purple";
  const iconBg = isCyan ? "rgba(0,180,255,0.15)" : "rgba(139,92,246,0.15)";
  const iconColor = isCyan ? "#00d4ff" : "#a78bfa";
  const tagClass = isCyan ? "tag-cyan" : "tag-purple";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 260, damping: 24 }}
      className={`${cardClass} p-8 relative overflow-hidden group cursor-pointer h-full flex flex-col`}
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${
        isCyan ? 'bg-cyan-500' : 'bg-purple-500'
      }`} />

      {/* Icon badge */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg"
        style={{ background: iconBg, color: iconColor, border: `1px solid ${isCyan ? 'rgba(0,212,255,0.2)' : 'rgba(167,139,250,0.2)'}` }}
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 group-hover:text-white/60 transition-colors">{label}</p>
        <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-gradient transition-all">{title}</h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className={`${tagClass} group-hover:scale-105 transition-transform`}>{tag}</span>
          ))}
        </div>

        <p className="text-slate-300 text-[15px] leading-relaxed mb-8 group-hover:text-slate-200 transition-colors">{description}</p>
      </div>

      <button
        className="flex items-center gap-2 text-sm font-bold transition-all mt-auto"
        style={{ color: isCyan ? "#00d4ff" : "#a78bfa" }}
      >
        <span className="relative overflow-hidden group/btn">
            View Project Details
            <span className="absolute bottom-0 left-0 w-full h-px bg-current transform origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300" />
        </span>
        <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
      </button>
    </motion.div>
  );
}
