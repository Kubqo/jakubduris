/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070710",
        inkAlt: "#0c0c1a",
        canvas: "#13121f",
        foam: "#f7f5ef",
        mute: "#8b8aa1",
        iris: "#7c5cff",
        ember: "#ff6b6b",
        mint: "#5eead4",
        gold: "#fcd34d",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 30px 80px -20px rgba(124, 92, 255, 0.45)",
        ember: "0 30px 80px -20px rgba(255, 107, 107, 0.4)",
        mint: "0 30px 80px -20px rgba(94, 234, 212, 0.3)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        gridLines:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite",
      },
    },
  },
  plugins: [],
};
