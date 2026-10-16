import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/10 bg-background-dark py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg">
                <Terminal className="text-white size-5" />
              </div>
              <span className="font-bold text-xl text-white">Chikezie Emmanuel</span>
            </div>
            <p className="text-sm text-slate-500 max-w-[300px]">Building practical software for ambitious teams.</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Navigation</p>
              <a href="#projects" className="text-sm text-slate-400 hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="text-sm text-slate-400 hover:text-primary transition-colors">Experience</a>
              <a href="#about" className="text-sm text-slate-400 hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm text-slate-400 hover:text-primary transition-colors">Stack</a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Contact</p>
              <a href="mailto:kezieodike@gmail.com" className="text-sm text-slate-400 hover:text-primary transition-colors">kezieodike@gmail.com</a>
              <a href="https://wa.me/2348106549123" className="text-sm text-slate-400 hover:text-primary transition-colors">+234 810 654 9123</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 Chikezie Emmanuel. All rights reserved. Web platforms, AI products, and reliable systems.</p>
          <div className="flex gap-8">
            <a href="mailto:kezieodike@gmail.com?subject=Privacy%20Policy" className="text-xs text-slate-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="mailto:kezieodike@gmail.com?subject=Terms%20of%20Service" className="text-xs text-slate-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
