import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div
      className="min-h-screen selection:bg-cyan-glow/30 selection:text-white"
      style={{ background: "#060914" }}
    >
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WorkProcess />
        <Testimonials />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
