import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Sparkles,
  ContactShadows,
  useGLTF,
  Html,
  Center,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

useGLTF.preload("/Astronaut.glb");

const Astronaut = ({ scrollProgress }) => {
  const groupRef = useRef();
  const { scene } = useGLTF("/Astronaut.glb");

  const cloned = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        if (obj.material) {
          obj.material = obj.material.clone();
          obj.material.envMapIntensity = 1.2;
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    const { mouse, clock } = state;
    if (!groupRef.current) return;

    const target = groupRef.current;
    target.rotation.y +=
      (mouse.x * 0.6 - target.rotation.y + clock.elapsedTime * 0.05) * 0.04;
    target.rotation.x += (-mouse.y * 0.25 - target.rotation.x) * 0.05;
    target.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.12;
    target.rotation.z =
      Math.sin(clock.elapsedTime * 0.4) * 0.06 + scrollProgress * 0.4;
  });

  return (
    <group ref={groupRef} position={[1.9, -0.2, 0]}>
      <Center>
        <primitive object={cloned} scale={1.0} />
      </Center>
    </group>
  );
};

const Ring = ({
  radius = 2.6,
  tilt = 0.6,
  color = "#ff6b6b",
  speed = 0.2,
  position = [1.6, 0, 0],
}) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <mesh ref={ref} position={position} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.012, 16, 220]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
};

const Particles = () => {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      const r = 4 + Math.random() * 3;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);

  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.y += d * 0.04;
      ref.current.rotation.x += d * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        sizeAttenuation
        color="#f7f5ef"
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
};

const ScrollCamera = ({ scrollProgress }) => {
  const { camera } = useThree();
  useFrame(() => {
    const targetZ = 5 - scrollProgress * 1.4;
    const targetY = scrollProgress * 0.4;
    camera.position.z += (targetZ - camera.position.z) * 0.06;
    camera.position.y += (targetY - camera.position.y) * 0.06;
    camera.lookAt(1.6, 0, 0);
  });
  return null;
};

const Loader = () => (
  <Html center>
    <div className="rounded-full border border-white/15 bg-ink/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-mute backdrop-blur">
      Loading scene…
    </div>
  </Html>
);

const HeroScene = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const max = window.innerHeight * 1.2;
      setScrollProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={[new THREE.Color("#070710")]} />
      <fog attach="fog" args={["#070710", 6, 14]} />

      <ambientLight intensity={0.9} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={2.4}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight
        position={[-4, -2, 2]}
        intensity={1.6}
        color="#7c5cff"
      />
      <pointLight position={[2, 2, 2]} intensity={1.4} color="#fcd34d" />
      <hemisphereLight args={["#ff6b6b", "#7c5cff", 0.7]} />

      <Suspense fallback={<Loader />}>
        <Float floatIntensity={1.2} rotationIntensity={0.25} speed={0.9}>
          <Astronaut scrollProgress={scrollProgress} />
        </Float>
        <Ring radius={2.4} tilt={1.1} color="#7c5cff" speed={0.15} />
        <Ring radius={2.8} tilt={-0.7} color="#ff6b6b" speed={-0.12} />
        <Ring radius={3.2} tilt={0.3} color="#5eead4" speed={0.08} />
        <Particles />
        <Sparkles
          count={70}
          scale={[6, 6, 4]}
          size={2.6}
          speed={0.4}
          color="#fcd34d"
          position={[1.6, 0, 0]}
        />
        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.35}
          blur={3}
          scale={6}
          far={3}
        />
        <ScrollCamera scrollProgress={scrollProgress} />
      </Suspense>

      <EffectComposer disableNormalPass>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.6}
          mipmapBlur
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0006]}
        />
        <Vignette darkness={0.45} offset={0.35} />
      </EffectComposer>
    </Canvas>
  );
};

export default HeroScene;
