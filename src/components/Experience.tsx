import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "MVP Labs",
      role: "Lead AI Systems Engineer",
      period: "2023 - Present",
      location: "Remote / Lagos",
      description: "Leading the development of autonomous agent frameworks and LLM orchestration layers. Architected scalable RAG pipelines for enterprise clients.",
      achievements: [
        "Reduced inference latency by 35% through custom caching strategies",
        "Managed a team of 5 developers on high-stakes AI integrations",
        "Implemented automated fine-tuning pipelines for domain-specific models"
      ]
    },
    {
      company: "NexaSystems",
      role: "Senior Fullstack Developer",
      period: "2021 - 2023",
      location: "Lagos, Nigeria",
      description: "Developed and maintained core SaaS products. Focused on high-performance React frontends and robust Node.js microservices.",
      achievements: [
        "Scaled user base from 10k to 100k+ active monthly users",
        "Optimized database queries reducing load times by 50%",
        "Mentored junior developers and established CI/CD best practices"
      ]
    },
    {
      company: "TechFlow Solutions",
      role: "Software Engineer",
      period: "2019 - 2021",
      location: "Lagos, Nigeria",
      description: "Contributed to various client projects ranging from e-commerce platforms to fintech dashboards.",
      achievements: [
        "Delivered 15+ successful client projects on time and within budget",
        "Integrated multiple third-party APIs including Stripe and Twilio",
        "Improved frontend performance using code-splitting and lazy loading"
      ]
    }
  ];

  return (
    <section id="experience" className="px-6 py-24 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
          Professional <span className="text-primary">Journey</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          A track record of engineering excellence and technical leadership in fast-paced environments.
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block"></div>
            
            <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all group shadow-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-xs text-slate-500 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-3" /> {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="size-3" /> {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="size-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-8 size-4 rounded-full bg-primary border-4 border-background-dark -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(71,37,244,0.5)]"></div>

              {/* Spacer for other side */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
