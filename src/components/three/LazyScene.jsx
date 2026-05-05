import { lazy, Suspense, useEffect, useRef, useState } from "react";

const HeroScene = lazy(() => import("./HeroScene.jsx"));
const AmbientScene = lazy(() => import("./AmbientScene.jsx"));

const sceneMap = {
  hero: HeroScene,
  ambient: AmbientScene,
};

const Fallback = () => (
  <div className="absolute inset-0 mesh-bg opacity-80" aria-hidden />
);

const LazyScene = ({ variant = "hero", className = "", ...props }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const SceneComponent = variant === "hero" ? sceneMap.hero : sceneMap.ambient;
  const sceneVariant = variant === "hero" ? undefined : variant;

  return (
    <div ref={containerRef} className={className}>
      {visible ? (
        <Suspense fallback={<Fallback />}>
          <SceneComponent {...(sceneVariant ? { variant: sceneVariant } : {})} {...props} />
        </Suspense>
      ) : (
        <Fallback />
      )}
    </div>
  );
};

export default LazyScene;
