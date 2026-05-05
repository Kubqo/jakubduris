import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { ArrowUpRight } from "./Icons.jsx";

const langs = [
  { name: "Slovak", level: "Proficiency (C2)", flag: "🇸🇰", strength: 1 },
  { name: "Czech", level: "Proficiency (C2)", flag: "🇨🇿", strength: 1 },
  { name: "English", level: "Upper intermediate (B2)", flag: "🇬🇧", strength: 0.7 },
];

const Languages = () => {
  return (
    <section className="section-pad relative">
      <div className="container-base">
        <SectionTitle
          eyebrow="Off-keyboard — 04"
          title={
            <>
              The <em className="not-italic text-gold">human</em> side of the developer.
            </>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-medium">Languages</h3>
              <span className="pill">Communication</span>
            </div>
            <ul className="space-y-4">
              {langs.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex-1">
                    <p className="text-foam">{lang.name}</p>
                    <p className="text-xs text-mute">{lang.level}</p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <span
                        key={dot}
                        className={`h-1.5 w-1.5 rounded-full ${
                          dot / 5 <= lang.strength
                            ? "bg-foam"
                            : "bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-iris/20 via-ember/10 to-mint/10 p-8 md:p-10"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ember/30 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-mint/20 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-medium">Interests</h3>
                <span className="pill">Off-time</span>
              </div>

              <p className="text-2xl leading-snug text-foam/90 md:text-3xl">
                I love playing{" "}
                <em className="display not-italic text-gold">
                  Trading Card Games
                </em>{" "}
                and team-based PC games when the laptop closes.
              </p>

              <a
                href="https://x.com/Kubqo_TCG"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-white/30 hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21l-6.51 7.44L22 22h-6.91l-4.59-6.04L4.84 22H2l7-8.01L1.84 2h7.06l4.13 5.46L18.24 2zm-2.42 18h1.86L7.27 4H5.3l10.52 16z" />
                </svg>
                Follow my TCG journey
                <ArrowUpRight className="transition group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
