import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Download, ChevronDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { useRef, useState } from "react";
import PageLayout from "../components/PageLayout";
import ProjectCard from "../components/ProjectCard";
import { FadeUp, StaggerList, StaggerItem } from "../components/AnimationWrappers";
import { projects, otherWork, skills, social, resumeUrl, about } from "../data/projects";

/* ─── Hero section ──────────────────────────────────────────────── */
function HeroSection() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-6, 6]), {
    stiffness: 100,
    damping: 30,
  });

  function handleMouseMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-400/8 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              {about.availableForWork && (
                <>
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </>
              )}
              {!about.availableForWork && (
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              )}
            </span>
            {about.availableForWork ? "Open to opportunities" : "Not currently available"}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary leading-[1.05] mb-4"
          >
            Michael
            <br />
            <span className="text-gradient">Anazodo</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-secondary mb-8 max-w-md leading-relaxed"
          >
           Software Engineer — I build full-stack applications with React, Node.js, and Laravel, connecting intuitive interfaces with APIs, payments, and background systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="btn-primary"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="btn-outline"
            >
              Get in Touch
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                download
                className="btn-ghost inline-flex items-center gap-1.5"
              >
                <Download size={15} />
                Resume
              </a>
            )}
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 mt-8"
          >
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer"
                aria-label="GitHub" className="text-secondary hover:text-accent transition-colors focus-ring rounded">
              <GithubIcon size={20} />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn" className="text-secondary hover:text-accent transition-colors focus-ring rounded">
              <LinkedinIcon size={20} />
              </a>
            )}
            {social.email && (
              <a href={`mailto:${social.email}`}
                aria-label="Email" className="text-secondary hover:text-accent transition-colors focus-ring rounded">
                <Mail size={20} />
              </a>
            )}
            <span className="text-border text-sm ml-1">{about.location}</span>
          </motion.div>
        </div>

        {/* Right — profile photo with tilt */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-3xl scale-95 -z-10" />

          {/* Photo frame */}
          <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
            <img
              src="/professional-michael.png"
              alt="Michael Anazodo — profile photo placeholder. Replace /public/profile-placeholder.jpg with your real photo."
              className="w-full h-full object-cover"
              width={320}
              height={320}
            />
            {/* Overlay label */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white/70 text-xs text-center font-medium">
                
              </p>
            </div>
          </div>

          {/* Floating chip — tech stack */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 bg-surface border border-border rounded-xl px-4 py-2 shadow-lg text-sm font-medium text-primary flex items-center gap-2"
          >
            <span className="text-lg">⚡</span>
            React · Node · MongoDB
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#work"
        aria-label="Scroll to work section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary hover:text-primary transition-colors focus-ring rounded-full p-1"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}

/* ─── Work section ──────────────────────────────────────────────── */
function WorkSection() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <FadeUp>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-accent font-mono text-sm font-semibold tracking-widest uppercase">
            02
          </span>
          <span className="h-px flex-1 max-w-[40px] bg-border" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-primary mb-4 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-secondary text-lg max-w-xl">
          A selection of products I've built or contributed to — click any card
          for the full case study.
        </p>
      </FadeUp>

      <div className="mt-14 flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ─── Other Work section ─────────────────────────────────────────── */
function OtherWorkSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <FadeUp>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-accent font-mono text-sm font-semibold tracking-widest uppercase">
            03
          </span>
          <span className="h-px flex-1 max-w-[40px] bg-border" />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-2">Other Work</h2>
        <p className="text-secondary mb-10">
          Smaller projects, experiments, and contributions.
        </p>
      </FadeUp>

      <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherWork.map((item) => (
          <StaggerItem key={item.id}>
            <div className="h-full p-5 rounded-xl border border-border bg-surface hover:border-accent/40 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-accent hover:underline focus-ring rounded"
                >
                  View →
                </a>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}

/* ─── About section ──────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <FadeUp>
          <div className="mb-4 flex items-center gap-3">
            <span className="text-accent font-mono text-sm font-semibold tracking-widest uppercase">
              04
            </span>
            <span className="h-px flex-1 max-w-[40px] bg-border" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-primary mb-6 tracking-tight">
            About Me
          </h2>
          <div className="space-y-4">
            {about.bio.map((para, i) => (
              <p key={i} className="text-secondary text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            {resumeUrl && (
              <a href={resumeUrl} download className="btn-primary inline-flex items-center gap-2">
                <Download size={15} />
                Download Resume
              </a>
            )}
            {!resumeUrl && (
              <span className="inline-flex items-center gap-2 text-sm text-secondary italic">
                [PLACEHOLDER: Add resume PDF to /public/resume.pdf and set resumeUrl in data/projects.js]
              </span>
            )}
          </div>
        </FadeUp>

        {/* Skills */}
        <FadeUp delay={0.15}>
          <div id="skills" className="space-y-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg bg-surface-alt border border-border text-secondary hover:border-accent/40 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Contact section ────────────────────────────────────────────── */
function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="relative rounded-3xl bg-gradient-to-br from-accent/15 via-blue-500/5 to-transparent border border-accent/20 p-10 md:p-16 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent/20 blur-3xl" />
        </div>

        <FadeUp>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-accent font-mono text-sm font-semibold tracking-widest uppercase">
              05
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-primary mb-4 tracking-tight">
            Let's Talk
          </h2>
          <p className="text-secondary text-lg max-w-lg mx-auto mb-8">
            Whether you have a project in mind, a role to fill, or just want to
            say hi — my inbox is open.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="btn-primary inline-flex items-center gap-2 text-base px-6 py-3"
              >
                <Mail size={18} />
                {social.email}
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
              <LinkedinIcon size={16} />
                LinkedIn
              </a>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <WorkSection />
      <OtherWorkSection />
      <AboutSection />
      <ContactSection />
    </PageLayout>
  );
}
