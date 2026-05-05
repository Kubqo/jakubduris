import { motion } from "framer-motion";
import { ArrowUpRight, StatusDot } from "./Icons.jsx";
import LazyScene from "./three/LazyScene.jsx";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 sm:pt-40"
    >
      <div className="absolute inset-0 -z-20 mesh-bg" aria-hidden />
      <div className="absolute inset-0 -z-20 grid-overlay" aria-hidden />
      <LazyScene
        variant="hero"
        className="absolute inset-0 -z-10"
      />

      <div className="container-base relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="relative z-10">
            <motion.div variants={item} className="mb-6">
              <span className="pill">
                <StatusDot />
                Open to new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="display text-[clamp(3rem,7.4vw,6.6rem)]"
            >
              <span className="block text-foam/60">Hi, I&apos;m Jakub.</span>
              <span className="gradient-text bg-[length:200%_200%] animate-gradientShift">
                I craft bold,
              </span>
              <br />
              <span className="text-foam">elegant&nbsp;</span>
              <span className="gradient-text bg-[length:200%_200%] animate-gradientShift">
                web experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg text-mute md:text-xl"
            >
              Frontend developer based in Brno. I help product teams ship fast,
              accessible interfaces with a touch of motion and depth.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a className="magnet-btn primary" href="#projects">
                View work <ArrowUpRight />
              </a>
              <a className="magnet-btn ghost" href="#contact">
                Let&apos;s talk
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 grid max-w-md grid-cols-3 gap-6 text-sm"
            >
              <div>
                <p className="display text-3xl text-foam">5+</p>
                <p className="mt-1 text-mute">years shipping</p>
              </div>
              <div>
                <p className="display text-3xl text-foam">1M+</p>
                <p className="mt-1 text-mute">users reached</p>
              </div>
              <div>
                <p className="display text-3xl text-foam">15+</p>
                <p className="mt-1 text-mute">live products</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="relative h-[480px] w-full sm:h-[560px] lg:h-[640px]"
            aria-hidden
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-auto absolute right-4 top-10 z-10 hidden rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 text-sm backdrop-blur-xl sm:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-mute">
                Brno, CZ
              </p>
              <p className="mt-1 text-foam">Available remote / EU</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-auto absolute -right-2 bottom-16 z-10 hidden rounded-2xl border border-white/10 bg-gradient-to-br from-iris/40 to-ember/30 px-4 py-3 text-sm shadow-glow backdrop-blur-xl sm:block"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-foam/70">
                Currently
              </p>
              <p className="mt-1 font-medium text-foam">@ AIS servis</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-24 flex flex-col items-center gap-3 pb-16"
        >
          <span className="eyebrow">Scroll</span>
          <span className="scroll-hint" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
