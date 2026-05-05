import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const FloatingShape = ({ position, geometry, color, scale = 1, speed = 1 }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.18 * speed;
      ref.current.rotation.y += delta * 0.22 * speed;
    }
  });
  return (
    <Float floatIntensity={1.2} rotationIntensity={0.6} speed={speed}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.25}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </mesh>
    </Float>
  );
};

const AmbientScene = ({ variant = "skills" }) => {
  const shapes = useMemo(() => {
    if (variant === "projects") {
      return [
        {
          position: [-3.2, 1.2, -1],
          geometry: <torusKnotGeometry args={[0.6, 0.18, 100, 16]} />,
          color: "#7c5cff",
          scale: 0.9,
          speed: 0.6,
        },
        {
          position: [3.4, -0.8, -2],
          geometry: <icosahedronGeometry args={[0.8, 0]} />,
          color: "#ff6b6b",
          scale: 1,
          speed: 0.8,
        },
        {
          position: [0, -2.2, -3],
          geometry: <octahedronGeometry args={[0.6, 0]} />,
          color: "#5eead4",
          scale: 0.7,
          speed: 1,
        },
      ];
    }
    return [
      {
        position: [-2.8, 1.4, -1],
        geometry: <icosahedronGeometry args={[0.7, 0]} />,
        color: "#7c5cff",
        scale: 0.9,
        speed: 0.7,
      },
      {
        position: [2.6, 1.6, -2.2],
        geometry: <dodecahedronGeometry args={[0.7, 0]} />,
        color: "#fcd34d",
        scale: 0.8,
        speed: 0.5,
      },
      {
        position: [3.2, -1.6, -1.5],
        geometry: <torusGeometry args={[0.55, 0.18, 16, 80]} />,
        color: "#ff6b6b",
        scale: 1,
        speed: 0.9,
      },
      {
        position: [-3.4, -1.4, -2],
        geometry: <octahedronGeometry args={[0.7, 0]} />,
        color: "#5eead4",
        scale: 0.85,
        speed: 0.65,
      },
    ];
  }, [variant]);

  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 4]} intensity={1} color="#ffffff" />
      <directionalLight position={[-4, -2, 3]} intensity={0.6} color="#7c5cff" />
      <Suspense fallback={null}>
        {shapes.map((shape, idx) => (
          <FloatingShape key={idx} {...shape} />
        ))}
      </Suspense>
    </Canvas>
  );
};

export default AmbientScene;
