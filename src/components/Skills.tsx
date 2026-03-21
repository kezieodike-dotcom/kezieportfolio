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
      tags: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
      color: "cyan"
    },
    {
      title: "Backend Development",
      icon: <Database className="size-8" />,
      description: "Designing powerful backend systems, APIs, and server architecture.",
      tags: ["Node.js", "Express", "Python"],
      color: "purple"
    },
    {
      title: "AI & Intelligent Systems",
      icon: <Brain className="size-8" />,
      description: "Creating intelligent software that enhances productivity and decision-making.",
      tags: ["AI API integrations", "Automation systems", "Machine learning"],
      color: "rose"
    },
    {
      title: "Infrastructure & Architecture",
      icon: <Cloud className="size-8" />,
      description: "Building stable systems capable of supporting growing platforms.",
      tags: ["API development", "Cloud deployment", "System architecture"],
      color: "amber"
    }
  ];

  return (
    <section id="skills" className="px-6 py-24 lg:px-20 max-w-7xl mx-auto w-full relative overflow-hidden">
      <div className="mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Modern Tech Stack
        </div>
        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
          Technologies I <span className="text-gradient">Work With</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          I use modern technologies and best engineering practices to build scalable, reliable, and high-performance digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {techStack.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ delay: idx * 0.1 }}
            className={`group feature-card p-6 border-slate-800 transition-all ${
              item.color === 'cyan' ? 'hover:border-cyan-500/50' :
              item.color === 'purple' ? 'hover:border-purple-500/50' :
              item.color === 'rose' ? 'hover:border-rose-500/50' :
              'hover:border-amber-500/50'
            }`}
          >
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110 ${
              item.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20' :
              item.color === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20' :
              item.color === 'rose' ? 'bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20' :
              'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20'
            }`}>
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">{item.title}</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded transition-colors ${
                  item.color === 'cyan' ? 'bg-cyan-500/5 text-cyan-400/80 border border-cyan-500/10' :
                  item.color === 'purple' ? 'bg-purple-500/5 text-purple-400/80 border border-purple-500/10' :
                  item.color === 'rose' ? 'bg-rose-500/5 text-rose-400/80 border border-rose-500/10' :
                  'bg-amber-500/5 text-amber-400/80 border border-amber-500/10'
                }`}>
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
