import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { skills } from "../data.js";
import LazyScene from "./three/LazyScene.jsx";

const Skills = () => {
  return (
    <section id="skills" className="section-pad relative isolate overflow-hidden">
      <LazyScene
        variant="ambient"
        className="absolute inset-0 -z-10 opacity-70"
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container-base relative">
        <SectionTitle
          eyebrow="Skills — 02"
          title={
            <>
              The toolkit behind <em className="not-italic text-mint">ambitious</em> products.
            </>
          }
          sub="A well-honed stack focused on Next.js, React, and motion-rich web experiences."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-iris/20 blur-3xl transition group-hover:bg-iris/40" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="eyebrow mb-2">0{idx + 1}</p>
                    <h3 className="text-xl font-medium text-foam">
                      {skill.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${
                      skill.tier === "advanced"
                        ? "border-ember/40 bg-ember/10 text-ember"
                        : "border-iris/40 bg-iris/10 text-iris"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/5">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.percent }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.2, 0.8, 0.2, 1],
                        delay: 0.1 + idx * 0.05,
                      }}
                      className="block h-full rounded-full bg-gradient-to-r from-iris via-ember to-gold"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
