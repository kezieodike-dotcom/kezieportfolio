import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <span className="font-bold text-[22px] tracking-tight text-primary">
            Chikezie<span className="text-white">Dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="btn-primary text-[14px] px-6 py-2 h-auto">
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden px-6 py-6 flex flex-col gap-6 bg-[#0B1121] border-b border-white/5 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[16px] font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary w-full mt-2">
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
