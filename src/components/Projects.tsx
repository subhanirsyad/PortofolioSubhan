"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, accentMap } from "@/lib/data";

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const accent = accentMap[project.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`
        relative border border-[#1a2740] border-l-2 ${accent.border} bg-[#0d1829]
        transition-all duration-200 group
        ${accent.glow}
      `}
    >
      <div className="p-6">
        {/* Name */}
        <h3 className={`text-lg font-bold ${accent.text} mb-2 tracking-tight`}>
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-[#4a6080] text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] text-[#4a6080] border border-[#1a2740] px-1.5 py-0.5 tracking-wide uppercase bg-[#080f1a]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-[11px] tracking-widest text-[#4a6080] hover:${accent.text.replace("text-", "text-")} transition-colors duration-150 group/link`}
            >
              GITHUB{" "}
              <span className="group-hover/link:translate-x-0.5 inline-block transition-transform duration-150">
                ↗
              </span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-widest text-[#4a6080] hover:text-[#f5f5f5] transition-colors duration-150 group/link"
            >
              DEMO{" "}
              <span className="group-hover/link:translate-x-0.5 inline-block transition-transform duration-150">
                ↗
              </span>
            </a>
          )}
          {!project.github && !project.demo && (
            <span className="font-mono text-[11px] tracking-widest text-[#1a2740]">
              PRIVATE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="border-b border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="h-12 flex items-center border-b border-[#1a2740]">
          <span className="font-mono text-[10px] tracking-widest text-[#4a6080]">
            04 / <span className="text-[#f5f5f5]">PROJECTS</span>
          </span>
          <span className="ml-auto font-mono text-[10px] text-[#4a6080]">
            {projects.length} entries
          </span>
        </div>

        <div className="py-16" ref={ref}>
          {/* Sub-label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="font-mono text-[11px] text-[#4a6080] tracking-widest mb-8"
          >
            ML · DATA ENGINEERING · ANALYTICS
          </motion.p>

          {/* 2-col grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#1a2740]">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`
                  ${i >= 2 ? "border-t border-[#1a2740]" : ""}
                  ${i % 2 === 1 ? "border-l border-[#1a2740]" : ""}
                `}
              >
                <ProjectCard project={project} delay={0.05 + (i % 4) * 0.08} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
