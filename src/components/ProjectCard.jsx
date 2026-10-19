import { Link } from "react-router-dom";
import { ExternalLink, Lock, Monitor } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { motion } from "framer-motion";

const tagColors = {
  "Frontend Only": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "Unreleased": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "Live": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.995 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative grid md:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden hover:border-accent/40 transition-colors duration-300"
    >
      {/* Color accent panel */}
      <div
        className={`relative h-48 md:h-full min-h-[200px] ${project.coverGradient} bg-gradient-to-br flex items-center justify-center overflow-hidden order-first ${isEven ? "md:order-first" : "md:order-last"
          }`}
      >
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute w-48 h-48 rounded-full blur-3xl opacity-30"
          style={{ background: project.accent }}
        />
        {/* Project number */}
        <span className="relative text-white/20 font-black text-[120px] leading-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {project.isFrontendOnly && (
            <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm">
              <Monitor size={11} />
              Frontend Only
            </span>
          )}
          {project.isUnreleased && (
            <span className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm">
              <Lock size={11} />
              Unreleased
            </span>
          )}
        </div>
      </div>

      {/* Content panel */}
      <div className="p-7 md:p-10 flex flex-col justify-between bg-surface">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-alt border border-border text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-accent font-medium text-sm mb-3">{project.tagline}</p>
          <p className="text-secondary text-base leading-relaxed">{project.shortDesc}</p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to={`/project/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline focus-ring rounded px-1 py-0.5 transition-colors"
          >
            View Case Study →
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-border text-secondary hover:text-primary hover:border-accent/50 transition-colors focus-ring"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-border text-secondary hover:text-primary hover:border-accent/50 transition-colors focus-ring"
            >
              <GithubIcon size={13} />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
