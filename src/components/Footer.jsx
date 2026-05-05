const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-base flex flex-col items-center gap-4 text-sm text-mute md:flex-row md:justify-between">
        <p className="display text-xl text-foam">Jakub Ďuriš</p>
        <p>© 2026 — Crafted with motion, depth, and care.</p>
        <div className="flex gap-3 text-xs uppercase tracking-[0.2em]">
          <a className="hover:text-foam" href="https://x.com/Kubqo_TCG" target="_blank" rel="noreferrer">
            X
          </a>
          <span className="text-mute/40">/</span>
          <a className="hover:text-foam" href="mailto:jakubduris1@gmail.com">
            Mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
