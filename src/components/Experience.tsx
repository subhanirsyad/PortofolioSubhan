"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experiences } from "@/lib/data";

const DEFAULT_SHOW = 3;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const visible = expanded ? experiences : experiences.slice(0, DEFAULT_SHOW);

  return (
    <section id="experience" className="py-24 border-t border-[#1a2d4a]/60 section-glow">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#f0f4ff] mb-12"
        >
          Background
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[6px] top-2 bottom-2 w-px bg-[#1a2d4a]" />

          <div className="space-y-8">
            {visible.map((exp, i) => (
              <motion.div
                key={`${exp.organization}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.08 }}
                className="relative flex gap-6 pl-8"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 shrink-0 transition-colors duration-200 ${
                    exp.type === "work"
                      ? "bg-[#00d4ff] border-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.4)]"
                      : "bg-[#0a0f1e] border-[#1a2d4a]"
                  }`}
                />

                {/* Content */}
                <div className="flex-1 min-w-0 pb-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="text-[#f0f4ff] font-semibold text-sm leading-snug">
                        {exp.role}
                      </p>
                      <p className="text-[#4a6280] text-xs mt-0.5">{exp.organization}</p>
                    </div>
                    <span className="text-[#4a6280] text-xs shrink-0 mt-0.5">{exp.period}</span>
                  </div>

                  {exp.bullets && (
                    <ul className="mt-2.5 space-y-1.5">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-xs text-[#4a6280] leading-relaxed">
                          <span className="text-[#00d4ff] mt-0.5 shrink-0">·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {experiences.length > DEFAULT_SHOW && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 pl-8"
          >
            <button
              onClick={() => setExpanded((e) => !e)}
              className="flex items-center gap-2 text-sm text-[#4a6280] hover:text-[#f0f4ff] transition-colors duration-200 font-medium"
            >
              {expanded ? (
                <><ChevronUp size={16} /> Show less</>
              ) : (
                <><ChevronDown size={16} /> Show {experiences.length - DEFAULT_SHOW} more</>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
