"use client";

import CardWrapper from "@/components/CardWrapper";
import { projects, accentStyles } from "@/lib/data";

export default function ProjectsCard() {
  return (
    <CardWrapper
      className="card-projects md-full p-6"
      bg="#1a1a1a"
      delay={0.1}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em]">
          Projects
        </p>
        <span className="text-[#333333] text-xs font-medium tabular-nums">
          {projects.length} total
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {projects.map((project) => {
          const style = accentStyles[project.accent];
          return (
            <div
              key={project.id}
              className="relative rounded-xl p-4 border border-[#222222] hover:border-[#2e2e2e] transition-all duration-200 group"
              style={{
                borderLeftColor: style.border,
                borderLeftWidth: "2px",
                backgroundColor: style.bg,
              }}
            >
              {/* Name */}
              <h3
                className="text-sm font-semibold mb-1.5 leading-tight"
                style={{ color: style.text }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[#666666] text-xs leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-medium text-[#444444] bg-[#1a1a1a] border border-[#2a2a2a] px-1.5 py-0.5 rounded uppercase tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-medium text-[#444444] hover:text-[#f5f5f5] transition-colors duration-150 uppercase tracking-wide"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-medium text-[#444444] hover:text-[#f5f5f5] transition-colors duration-150 uppercase tracking-wide"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </CardWrapper>
  );
}
