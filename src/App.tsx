import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import WorkProcess from "./components/WorkProcess";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div
      className="min-h-screen"
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
        <Experience />
        <Testimonials />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
