const Marquee = ({ items }) => {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-inkAlt/40 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-4 text-2xl text-foam/40 sm:text-3xl md:text-4xl"
          >
            <span className="display italic">{item}</span>
            <span className="text-iris/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
