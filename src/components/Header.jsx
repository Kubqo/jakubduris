import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <div
        className={`pointer-events-auto flex w-full max-w-[1180px] items-center justify-between rounded-full border border-white/10 px-4 py-2 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "backdrop-blur-2xl bg-ink/70 shadow-glow"
            : "backdrop-blur-md bg-ink/30"
        }`}
      >
        <a
          className="group flex items-center gap-3 text-sm font-medium tracking-wide"
          href="#top"
          aria-label="Jakub Ďuriš — home"
        >
          <span className="logo-mark relative flex h-10 w-10 items-center justify-center rounded-full">
            <span
              aria-hidden
              className="logo-mark-letters font-display text-[20px] italic leading-none"
            >
              <span className="logo-j">J</span>
              <span className="logo-d">Ď</span>
            </span>
            <span
              aria-hidden
              className="absolute -right-0.5 -top-0.5 z-10 h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_theme(colors.gold)]"
            />
          </span>
          <span className="hidden sm:inline">
            Jakub <span className="font-display italic">Ďuriš</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3 py-1.5 text-sm text-foam/70 transition hover:text-foam"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/0 transition group-hover:bg-white/5" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm transition hover:border-white/20 hover:bg-white/10 md:inline-flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-mint animate-ping opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-mint" />
          </span>
          Available
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            className="icon-svg"
            aria-hidden="true"
          >
            <path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="pointer-events-auto absolute left-4 right-4 top-[68px] flex flex-col gap-1 rounded-3xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm text-foam/80 transition hover:bg-white/5 hover:text-foam"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
