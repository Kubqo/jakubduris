import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

const traits = [
  { label: "Years experience", value: "5+" },
  { label: "Products shipped", value: "15+" },
  { label: "Users reached", value: "1M+" },
  { label: "Coffee per week", value: "21" },
];

const stack = [
  "Next.js / React",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "Headless CMS",
  "Design systems",
  "Three.js",
  "Framer Motion",
];

const About = () => {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-base relative">
        <SectionTitle
          eyebrow="About — 01"
          title={
            <>
              A frontend engineer with{" "}
              <em className="not-italic text-iris">product instincts.</em>
            </>
          }
          sub="I sit at the intersection of design, engineering, and motion — building interfaces that feel as good as they look."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-iris/30 blur-3xl" />
            <p className="text-lg leading-relaxed text-foam/80">
              I&apos;m a frontend developer who thrives on challenging projects.
              I&apos;ve led complex web apps for governments, sport platforms,
              fintech, and AI tooling — always with a focus on{" "}
              <span className="text-foam">performance</span>,{" "}
              <span className="text-foam">accessibility</span>, and{" "}
              <span className="text-foam">motion that feels effortless</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foam/80"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((trait) => (
              <div
                key={trait.label}
                className="glass relative flex flex-col justify-between rounded-3xl p-6 transition hover:-translate-y-1"
              >
                <p className="display text-4xl text-foam md:text-5xl">
                  {trait.value}
                </p>
                <p className="mt-3 text-sm text-mute">{trait.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
