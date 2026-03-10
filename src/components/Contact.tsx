import { motion } from "motion/react";
import { Send, Quote, Linkedin, Twitter, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 text-center mx-auto">
          Let's Build Something <span className="text-[#00d4ff]">Great</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl text-center mx-auto">
          Have an idea you want to bring to life? Let’s work together to build a powerful digital product that can grow, scale, and create impact.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-slate-900/50 p-8 rounded-xl border border-primary/10 shadow-xl"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-background-dark border border-primary/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-background-dark border border-primary/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Budget Range</label>
              <select className="w-full bg-background-dark border border-primary/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white appearance-none">
                <option value="">Select a range</option>
                <option value="small">$2,000 - $5,000</option>
                <option value="medium">$5,000 - $15,000</option>
                <option value="large">$15,000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Project Description</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project, goals, and technical requirements..."
                className="w-full bg-background-dark border border-primary/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
              ></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all group">
              Send Message <Send className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          {/* Testimonial */}
          <div className="bg-primary/5 p-8 rounded-xl border-l-4 border-primary italic relative">
            <Quote className="text-primary size-10 mb-4 opacity-50" />
            <p className="text-lg text-slate-200 mb-6">
              "Chikezie's ability to bridge the gap between complex AI logic and intuitive UI is unparalleled. He didn't just build our app; he architected our future."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn0v20tCh0Qy0fwOywIBP-PTBuIsZWU3_pTeQikDasxu3MKVoDu4SgUgca92571R8uVS_4bL5uhF5S-F57DbAriRaBobfgK-Ac9_sHUOJJ3J4dND0QhL2gjmvcNVsdPAQiAgEnhl6x3TFzdjP5oI4I8yFnSL1FgA9FKCrmCLS9C2nUu0O4JhaVrwhuWz7lMJJLbmtq-2bPpjExsLiGgfybIw9ZedSCfivDvB3GLjiwWAyAS0G9lCek_uyhtdgf2qIFosS6BdctS0Yk"
                  alt="Sarah Chen"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">Sarah Chen</p>
                <p className="text-sm text-slate-500">CTO, NexaSystems</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect Elsewhere</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "LinkedIn", icon: <Linkedin className="size-5" /> },
                { name: "X / Twitter", icon: <Twitter className="size-5" /> },
                { name: "WhatsApp Business", icon: <MessageCircle className="size-5" /> }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-900 border border-primary/10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{social.icon}</span>
                    <span className="font-medium text-slate-200">{social.name}</span>
                  </div>
                  <ArrowRight className="size-4 text-slate-500 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="mt-auto pt-8 flex items-center gap-4 text-slate-500">
            <MapPin className="size-5" />
            <span className="text-sm">Based in Lagos, Nigeria • Available for remote global collaboration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
