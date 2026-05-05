import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { MailIcon, PinIcon, ArrowUpRight } from "./Icons.jsx";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-pad relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-iris/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-ember/20 blur-3xl" />
      </div>

      <div className="container-base relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Contact — 06"
              title={
                <>
                  Let&apos;s build something{" "}
                  <em className="font-bold not-italic text-gold">bold</em>{" "}
                  together.
                </>
              }
              sub="Available for collaborations, consulting, and ambitious product challenges."
            />

            <div className="mt-2 flex flex-wrap gap-4">
              <a className="magnet-btn primary" href="mailto:jakubduris1@gmail.com">
                Email me <ArrowUpRight />
              </a>
              <a className="magnet-btn ghost" href="#projects">
                View work
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass relative overflow-hidden rounded-3xl p-6 md:p-8"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-mint/15 blur-3xl" />

            <div className="mb-5 flex items-center justify-between">
              <span className="pill">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-mint" />
                </span>
                Open to opportunities
              </span>
              <span className="text-xs text-mute">v.2026</span>
            </div>

            <div className="grid gap-3">
              {[
                {
                  href: "mailto:jakubduris1@gmail.com",
                  text: "jakubduris1@gmail.com",
                  Icon: MailIcon,
                  label: "Email",
                },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-iris">
                    <item.Icon />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs text-mute">{item.label}</p>
                    <p className="text-foam">{item.text}</p>
                  </div>
                  <ArrowUpRight className="text-mute transition group-hover:translate-x-1 group-hover:text-foam" />
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ember">
                  <PinIcon />
                </span>
                <div className="flex-1">
                  <p className="text-xs text-mute">Location</p>
                  <p className="text-foam">Brno, Czech Republic</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
