import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center">

      {/* Container: 1200px max width, 2-column layout */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <p className="text-[#00d4ff] font-bold text-[15px] mb-4">
            Welcome to my portfolio
          </p>

          {/* Headline */}
          <h1 className="text-white font-bold text-[56px] lg:text-[72px] leading-[1.1] mb-4 tracking-tight">
            Chikezie <span className="text-gradient block sm:inline">Emmanuel</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-slate-200 font-medium text-[20px] lg:text-[24px] mb-6">
            Fullstack Software Developer & AI Systems Engineer
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-[480px]">
            I design and build scalable digital platforms, AI-powered applications, and modern web systems for founders, startups, and ambitious businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Start a Project
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="btn-social">
              <Github className="size-5" />
            </a>
            <a href="#" className="btn-social">
              <Linkedin className="size-5" />
            </a>
            <a href="#" className="btn-social">
              <Twitter className="size-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[4/5] profile-glow">
            <div className="profile-image-container w-full h-full bg-slate-800">
              {/* Replace with actual image source */}
              <img
                src="/profile.png"
                alt="Chikezie Profile"
                className="w-full h-full object-cover object-top opacity-90"
                style={{ filter: "brightness(0.9) contrast(1.1)" }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
