import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const target = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };
    let frame = 0;

    const move = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
    };

    const animate = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      frame = requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      if (ringRef.current) ringRef.current.classList.add("scale-[2.4]");
    };
    const handleLeave = () => {
      if (ringRef.current) ringRef.current.classList.remove("scale-[2.4]");
    };

    document
      .querySelectorAll("a, button, [data-cursor='hover']")
      .forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });

    window.addEventListener("pointermove", move);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(frame);
      document
        .querySelectorAll("a, button, [data-cursor='hover']")
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
        });
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-1 -mt-1 h-2 w-2 rounded-full bg-foam mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-4 -mt-4 h-8 w-8 rounded-full border border-foam/40 transition-transform duration-200 ease-out mix-blend-difference"
      />
    </>
  );
};

export default Cursor;
