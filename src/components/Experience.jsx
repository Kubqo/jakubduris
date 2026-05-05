import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { experiences } from "../data.js";

const Experience = () => {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-base">
        <SectionTitle
          eyebrow="Experience — 03"
          title={
            <>
              Teams &amp; products{" "}
              <em className="not-italic text-ember">I&apos;ve helped build.</em>
            </>
          }
          sub="From government intranets to SaaS dashboards and AI tooling."
        />

        <div className="space-y-5">
          {experiences.map((item, idx) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition hover:-translate-y-0.5 md:p-8 ${
                item.highlight
                  ? "border-iris/40 bg-gradient-to-br from-iris/15 via-ember/10 to-transparent shadow-glow"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20"
              }`}
            >
              <span
                aria-hidden
                className={`absolute left-0 top-0 h-full w-1 ${
                  item.highlight
                    ? "bg-gradient-to-b from-iris via-ember to-iris/40"
                    : "bg-gradient-to-b from-white/15 to-transparent"
                }`}
              />

              <div className="grid gap-4 md:grid-cols-[200px_1fr] md:items-start md:gap-10">
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span
                    className={`pill text-xs ${
                      item.highlight ? "border-iris/40 text-iris" : ""
                    }`}
                  >
                    {item.highlight && (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 rounded-full bg-iris animate-ping opacity-70" />
                        <span className="relative h-2 w-2 rounded-full bg-iris" />
                      </span>
                    )}
                    {item.date}
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-mute md:mt-1">
                    {item.company.split("/")[1]?.trim() || item.company}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foam md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-mute">
                    {item.company.split("/")[0].trim()}
                  </p>
                  <p className="mt-4 text-foam/75">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
