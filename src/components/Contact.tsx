import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { Send, Quote, Linkedin, Twitter, MessageCircle, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const budget = String(form.get("budget") ?? "Not specified");
    const description = String(form.get("description") ?? "");
    const subject = `Portfolio enquiry from ${name}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Budget: ${budget}`, "", description].join("\n");

    window.location.href = `mailto:michael.chukuwu.241426@unn.edu.ng?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="px-6 py-24 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4 text-center mx-auto">
          Let's Build Something <span className="text-primary">Great</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl text-center mx-auto">
          Have a product idea, an internal workflow to improve, or a platform that needs to scale? Let’s talk through the problem and shape the right technical path.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 feature-card p-8 shadow-xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="full-name" className="text-sm font-medium text-slate-300">Full Name</label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full bg-[#060914]/50 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#060914]/50 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-slate-300">Budget Range</label>
                <select id="budget" name="budget" className="w-full bg-[#060914]/50 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white appearance-none">
                <option value="">Select a range</option>
                <option value="small">$2,000 - $5,000</option>
                <option value="medium">$5,000 - $15,000</option>
                <option value="large">$15,000+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-slate-300">Project Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Tell me about your project, goals, and technical requirements..."
                required
                className="w-full bg-[#060914]/50 border border-white/10 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white"
              ></textarea>
            </div>
            <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 group cursor-pointer">
              {sent ? "Message ready to send" : "Send Message"} <Send className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {sent && <p role="status" className="text-sm text-primary">Your email app should now be open with the message addressed to Michael.</p>}
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
          <div className="feature-card p-8 border-l-4 border-primary italic relative">
            <Quote className="text-primary size-10 mb-4 opacity-50" />
            <p className="text-lg text-slate-200 mb-6">
              "Chikezie's ability to bridge the gap between complex AI logic and intuitive UI is unparalleled. He didn't just build our app; he architected our future."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  src="/profile.png"
                  alt="Client testimonial portrait"
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
                { name: "LinkedIn", icon: <Linkedin className="size-5" />, color: "cyan", href: "https://linkedin.com" },
                { name: "X / Twitter", icon: <Twitter className="size-5" />, color: "purple", href: "https://x.com/ChikezieEmman19" },
                { name: "WhatsApp", icon: <MessageCircle className="size-5" />, color: "rose", href: "https://wa.me/2348106549123" },
                { name: "Email", icon: <Send className="size-5" />, color: "cyan", href: "mailto:michael.chukuwu.241426@unn.edu.ng" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 feature-card transition-all group ${
                    social.color === 'cyan' ? 'hover:border-cyan-500/30' :
                    social.color === 'purple' ? 'hover:border-purple-500/30' :
                    'hover:border-rose-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`transition-colors ${
                      social.color === 'cyan' ? 'text-cyan-400' :
                      social.color === 'purple' ? 'text-purple-400' :
                      'text-rose-400'
                    }`}>{social.icon}</span>
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{social.name}</span>
                  </div>
                  <ArrowRight className="size-4 text-slate-500 group-hover:text-primary transition-colors group-hover:translate-x-1" />
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
