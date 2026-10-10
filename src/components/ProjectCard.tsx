"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Mockup from "./Mockup";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const href = `/projects/${project.id}`;
  // Picked from the project's own links: the Streamlit app, and the repo (or the model page when there is no repo).
  const demo = project.links.find((l) => l.href.includes("streamlit.app"));
  const code =
    project.links.find((l) => l.href.startsWith("https://github.com/") && !l.href.includes("/blob/")) ??
    project.links.find((l) => l.href.startsWith("https://huggingface.co/"));

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 + (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="mock-card group h-full rounded-2xl bg-[#0d1729] border border-[#1a2d4a] hover:border-[#00d4ff]/40 transition-colors duration-200 overflow-hidden flex flex-col"
    >
      {/* Same destination as the title link, so it is skipped by keyboard and screen readers */}
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/10] overflow-hidden border-b border-[#1a2d4a]">
        <Mockup mockup={project.mockup} />
        <span className="mock-cta absolute left-3.5 bottom-3.5 z-10 inline-flex items-center gap-1.5 rounded-full border border-[#00d4ff]/30 bg-[#0a0f1e]/90 px-3 py-1.5 text-xs font-semibold text-[#00d4ff] backdrop-blur-sm">
          View project <ArrowUpRight size={13} />
        </span>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] font-semibold text-[#00d4ff] tracking-widest uppercase mb-2">
          {project.kind} · {project.year}
        </p>
        <h3 className="mb-2">
          <Link
            href={href}
            className="text-[#f0f4ff] font-semibold text-sm leading-snug hover:text-[#00d4ff] transition-colors duration-200"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-[#6b7fa0] text-xs leading-relaxed mb-4 flex-1">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[10px] text-[#6b7fa0] border border-[#1a2d4a] bg-[#0a0f1e] px-2 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-[10px] text-[#6b7fa0] px-1">+{project.stack.length - 3}</span>
          )}
        </div>

        {(demo || code) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {demo && (
              <a
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#00d4ff] text-[#0a0f1e] text-xs font-semibold hover:bg-[#00b8e0] transition-colors duration-200"
              >
                <Play size={13} /> Live Demo
              </a>
            )}
            {code && (
              <a
                href={code.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[#1a2d4a] text-[#f0f4ff] text-xs font-semibold hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors duration-200"
              >
                {code.href.includes("huggingface.co") ? (
                  <>
                    <ArrowUpRight size={13} /> Hugging Face
                  </>
                ) : (
                  <>
                    <GithubIcon size={13} /> GitHub
                  </>
                )}
              </a>
            )}
          </div>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d4ff] hover:text-[#f0f4ff] transition-colors duration-200"
        >
          View case study <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}
