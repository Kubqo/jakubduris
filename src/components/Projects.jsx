import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { ArrowUpRight } from "./Icons.jsx";
import TiltCard from "./TiltCard.jsx";
import LazyScene from "./three/LazyScene.jsx";

const ProjectCard = ({ project, idx }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.05 }}
    >
      <TiltCard className="h-full" maxTilt={4}>
        <a
          className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-white/25"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-iris/15 via-ink to-ember/10">
            {!errored && project.image && (
              <img
                src={project.image}
                alt={`Preview of ${project.name}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setErrored(true)}
                className={`h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.06] ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
            )}

            {(errored || !project.image) && (
              <div className="flex h-full w-full items-center justify-center">
                <span className="display text-4xl text-foam/70">
                  {project.name}
                </span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-foam backdrop-blur-md transition group-hover:bg-iris group-hover:text-foam">
              <ArrowUpRight />
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="eyebrow mb-1.5">Live</p>
              <p className="text-lg font-medium text-foam">{project.name}</p>
            </div>
            <span className="text-xs text-mute">
              {new URL(project.url).hostname.replace("www.", "")}
            </span>
          </div>
        </a>
      </TiltCard>
    </motion.div>
  );
};

const Projects = ({ eyebrow, title, sub, projects, alt, sceneVariant }) => {
  const id = alt ? "hobby-projects" : "projects";

  return (
    <section
      id={id}
      className="section-pad relative isolate overflow-hidden"
    >
      {sceneVariant && (
        <LazyScene
          variant="ambient"
          className="absolute inset-0 -z-10 opacity-50"
        />
      )}

      <div className="container-base relative">
        <SectionTitle eyebrow={eyebrow} title={title} sub={sub} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
