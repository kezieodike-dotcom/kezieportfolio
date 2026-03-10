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
            <span style={{ color: "#00d4ff" }}>Projects</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl">
            High-end digital products and AI systems engineered for scale and
            performance.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} delay={idx * 0.1} />
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
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 260, damping: 24 }}
      className={`${cardClass} p-6 relative overflow-hidden group cursor-pointer`}
    >
      {/* Icon badge */}
      <div
        className="absolute top-5 right-5 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>

      <p className="text-slate-300 text-xs font-semibold mb-1">{label}</p>
      <h3 className="text-white font-bold text-lg mb-3 pr-14">{title}</h3>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span key={tag} className={tagClass}>{tag}</span>
        ))}
      </div>

      <p className="text-slate-200 text-sm leading-relaxed mb-6">{description}</p>

      <button
        className="flex items-center gap-2 text-xs font-bold transition-all"
        style={{ color: isCyan ? "#00d4ff" : "#a78bfa" }}
      >
        View Project <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
