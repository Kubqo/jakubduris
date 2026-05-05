import { useRef } from "react";

const TiltCard = ({ children, className = "", maxTilt = 8, ...rest }) => {
  const innerRef = useRef(null);

  const handleMove = (event) => {
    const node = innerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - y) * (maxTilt * 2);
    node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
  };

  return (
    <div
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      <div
        ref={innerRef}
        className="tilt-inner h-full"
        style={{
          transform: "perspective(800px) rotateX(0deg) rotateY(0deg)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
