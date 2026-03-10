import { motion } from "motion/react";
import {
  Layers,
  Database,
  Brain,
  Cloud
} from "lucide-react";

export default function Skills() {
  const techStack = [
    {
      title: "Frontend Development",
      icon: <Layers className="size-8" />,
      description: "Building responsive and user-friendly interfaces that deliver smooth digital experiences.",
      tags: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Database className="size-8" />,
      description: "Designing powerful backend systems, APIs, and server architecture.",
      tags: ["Node.js", "Express", "Python"]
    },
    {
      title: "AI & Intelligent Systems",
      icon: <Brain className="size-8" />,
      description: "Creating intelligent software that enhances productivity and decision-making.",
      tags: ["AI API integrations", "Automation systems", "Machine learning"]
    },
    {
      title: "Infrastructure & Architecture",
      icon: <Cloud className="size-8" />,
      description: "Building stable systems capable of supporting growing platforms.",
      tags: ["API development", "Cloud deployment", "System architecture"]
    }
  ];

  return (
    <section id="skills" className="px-6 py-24 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#00d4ff]/10 px-3 py-1 text-xs font-semibold text-[#00d4ff] mb-4 border border-[#00d4ff]/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]"></span>
          </span>
          Modern Tech Stack
        </div>
        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
          Technologies I <span className="text-[#00d4ff]">Work With</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          I use modern technologies and best engineering practices to build scalable, reliable, and high-performance digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#00d4ff]/50 transition-all"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-800 rounded text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
