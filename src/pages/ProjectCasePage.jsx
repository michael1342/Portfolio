import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Monitor,
  Lock,
  Calendar,
  User,
} from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import PageLayout from "../components/PageLayout";
import { FadeUp } from "../components/AnimationWrappers";
import { projects } from "../data/projects";

/* Reusable section heading */
function CaseSection({ label, children }) {
  return (
    <FadeUp>
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
          <span className="text-accent">/</span>
          {label}
        </h2>
        {children}
      </div>
    </FadeUp>
  );
}

/* Tech stack table */
function TechStack({ stack }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      {stack.map(({ label, value }, i) => (
        <div
          key={label}
          className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-3 ${
            i % 2 === 0 ? "bg-surface" : "bg-surface-alt"
          }`}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-accent min-w-[120px]">
            {label}
          </span>
          <span className="text-secondary text-sm">{value}</span>
        </div>
      ))}
    </div>
  );
}

/* Bullet list */
function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-secondary text-base leading-relaxed">
          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCasePage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const currentIdx = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIdx - 1] ?? null;
  const next = projects[currentIdx + 1] ?? null;

  return (
    <PageLayout>
      {/* ─ Hero ─────────────────────────────────────── */}
      <section
        className={`relative min-h-[38vh] flex items-end pb-12 overflow-hidden bg-gradient-to-br ${project.coverGradient}`}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20"
          style={{ background: project.accent }}
          aria-hidden
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#work"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors mb-6 focus-ring rounded"
            >
              <ArrowLeft size={15} />
              All Projects
            </Link>
          </motion.div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.isFrontendOnly && (
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm border border-white/20">
                <Monitor size={12} />
                Frontend Only
              </span>
            )}
            {project.isUnreleased && (
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm border border-white/20">
                <Lock size={12} />
                Unreleased / Client Project
              </span>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl font-black text-white mb-3 tracking-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl max-w-2xl mb-6"
          >
            {project.tagline}
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 text-white/60 text-sm"
          >
            {project.year && (
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {project.year}
              </span>
            )}
            {project.role && (
              <span className="flex items-center gap-1.5">
                <User size={13} />
                {project.role}
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* ─ Body ─────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main content */}
          <div>
            {/* Disclaimer banners */}
            {(project.disclaimer || project.isFrontendOnly) && (
              <FadeUp>
                <div className="mb-10 flex gap-3 p-4 rounded-xl border border-amber-500/30 bg-amber-50/5">
                  <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-secondary leading-relaxed">
                    {project.disclaimer ||
                      "This is a frontend-only project. There is no backend — all data is mocked or static."}
                  </p>
                </div>
              </FadeUp>
            )}

            <CaseSection label="Overview">
              <p className="text-secondary text-base leading-relaxed">{project.overview}</p>
            </CaseSection>

            <CaseSection label="The Problem">
              <p className="text-secondary text-base leading-relaxed">{project.problem}</p>
            </CaseSection>

            <CaseSection label="Challenges">
              <BulletList items={project.challenges} />
            </CaseSection>

            <CaseSection label="Approach">
              <p className="text-secondary text-base leading-relaxed">{project.approach}</p>
            </CaseSection>

            {project.screenshots.length > 0 && (
              <CaseSection label="Screenshots">
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="rounded-xl border border-border w-full"
                    />
                  ))}
                </div>
              </CaseSection>
            )}

            <CaseSection label="Lessons Learned">
              <BulletList items={project.lessons} />
            </CaseSection>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Tech stack */}
            <FadeUp delay={0.1}>
              <div className="rounded-2xl border border-border p-5 bg-surface">
                <h3 className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
                  Tech Stack
                </h3>
                <TechStack stack={project.techStack} />
              </div>
            </FadeUp>

            {/* Tags */}
            <FadeUp delay={0.15}>
              <div className="rounded-2xl border border-border p-5 bg-surface">
                <h3 className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-surface-alt border border-border text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Links */}
            {(project.liveUrl || project.sourceUrl) && (
              <FadeUp delay={0.2}>
                <div className="rounded-2xl border border-border p-5 bg-surface space-y-3">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-accent mb-1">
                    Links
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors focus-ring rounded"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-accent transition-colors focus-ring rounded"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                  )}
                </div>
              </FadeUp>
            )}
          </aside>
        </div>

        {/* ─ Prev / Next ──────────────────────────────── */}
        <FadeUp>
          <div className="mt-16 pt-10 border-t border-border grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/project/${prev.slug}`}
                className="group flex flex-col gap-1 p-5 rounded-xl border border-border hover:border-accent/40 hover:bg-surface transition-all focus-ring"
              >
                <span className="text-xs text-secondary flex items-center gap-1.5">
                  <ArrowLeft size={12} />
                  Previous
                </span>
                <span className="font-bold text-primary group-hover:text-accent transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/project/${next.slug}`}
                className="group flex flex-col gap-1 p-5 rounded-xl border border-border hover:border-accent/40 hover:bg-surface transition-all text-right focus-ring sm:ml-auto w-full"
              >
                <span className="text-xs text-secondary flex items-center justify-end gap-1.5">
                  Next
                  <ArrowLeft size={12} className="rotate-180" />
                </span>
                <span className="font-bold text-primary group-hover:text-accent transition-colors">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </FadeUp>
      </div>
    </PageLayout>
  );
}
