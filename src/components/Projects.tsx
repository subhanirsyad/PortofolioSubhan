"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Layers, FileText } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects, type Project } from "@/lib/data";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0d1729] border border-[#1a2d4a] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide"
        >
          {/* Gradient header */}
          <div className={`h-32 rounded-t-2xl bg-gradient-to-br ${project.gradient} relative`}>
            <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-b from-transparent to-[#0d1729]/90" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
            >
              <X size={16} />
            </button>
            <div className="absolute bottom-4 left-6">
              <h2 className="text-xl font-bold text-[#f0f4ff]">{project.name}</h2>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-[#f0f4ff] mb-2">
                <Layers size={14} className="text-[#00d4ff]" /> Overview
              </h3>
              <p className="text-[#4a6280] text-sm leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-[#f0f4ff] mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#4a6280] border border-[#1a2d4a] bg-[#0a0f1e] px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* PDF Viewer */}
            {project.documentPdfUrl && (
              <div>
                <button
                  onClick={() => setShowPdf((v) => !v)}
                  className="flex items-center gap-2 text-sm font-semibold text-[#f0f4ff] hover:text-[#00d4ff] transition-colors mb-2"
                >
                  <FileText size={14} className="text-[#00d4ff]" />
                  Project Documentation
                  <span className="text-xs font-normal text-[#4a6280]">
                    (click to {showPdf ? "hide" : "view"})
                  </span>
                </button>
                <AnimatePresence>
                  {showPdf && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="rounded-xl overflow-hidden border border-[#1a2d4a]"
                    >
                      <iframe
                        src={project.documentPdfUrl}
                        className="w-full h-[480px] bg-white rounded-xl"
                        title={`${project.name} Documentation`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl border border-[#1a2d4a] text-[#f0f4ff] text-sm font-medium hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-200"
                >
                  <GithubIcon size={15} /> View Source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl bg-[#00d4ff] text-[#0a0f1e] text-sm font-semibold hover:bg-[#00b8e0] transition-colors duration-200"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl bg-[#0d1729] border border-[#1a2d4a] hover:border-[#00d4ff]/40 transition-all duration-200 overflow-hidden flex flex-col"
    >
      {/* Gradient thumbnail */}
      <div className={`h-36 bg-gradient-to-br ${project.gradient} relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1729]/60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-xs font-semibold text-[#f0f4ff] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
            View details
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-[#f0f4ff] font-semibold text-sm group-hover:text-[#00d4ff] transition-colors duration-200 leading-snug">
            {project.name}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#4a6280] hover:text-[#f0f4ff] transition-colors duration-200 shrink-0 ml-2"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
          )}
        </div>

        <p className="text-[#4a6280] text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] text-[#4a6280] border border-[#1a2d4a] bg-[#0a0f1e] px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] text-[#4a6280] px-1">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="projects" className="py-24 border-t border-[#1a2d4a]/60 section-glow">
        <div className="max-w-6xl mx-auto px-6" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
          >
            Projects
          </motion.p>

          <div className="flex items-end justify-between mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#4a6280] text-sm"
            >
              {projects.length} projects
            </motion.span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
