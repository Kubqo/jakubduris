import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Languages from "./components/Languages.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Marquee from "./components/Marquee.jsx";
import Cursor from "./components/Cursor.jsx";
import { projects, hobbyProjects } from "./data.js";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-iris via-ember to-gold"
      />
      <div className="noise" aria-hidden />
      <Cursor />

      <Header />

      <main>
        <Hero />
        <About />
        <Marquee
          items={[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind",
            "Framer Motion",
            "Three.js",
            "React Native",
            "Headless CMS",
          ]}
        />
        <Skills />
        <Experience />
        <Languages />
        <Projects
          eyebrow="Projects — 05"
          title={
            <>
              Selected <em className="not-italic text-iris">public</em> work.
            </>
          }
          sub="A glimpse at recent shipped products and platforms."
          projects={projects}
          sceneVariant
        />
        <Projects
          eyebrow="Hobby — 05.1"
          title={
            <>
              Side <em className="not-italic text-mint">experiments.</em>
            </>
          }
          sub="Small ideas that grew into full projects."
          projects={hobbyProjects}
          alt
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
