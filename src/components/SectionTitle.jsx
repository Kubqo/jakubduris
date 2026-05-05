import { motion } from "framer-motion";

const SectionTitle = ({ eyebrow, title, sub, align = "left" }) => {
  return (
    <div
      className={`mb-14 flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="display text-[clamp(2.4rem,4.6vw,4rem)] max-w-3xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl text-mute"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
