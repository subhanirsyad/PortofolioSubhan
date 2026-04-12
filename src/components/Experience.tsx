"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences, type ExperienceType } from "@/lib/data";

const typeConfig: Record<ExperienceType, { label: string; color: string }> = {
  teaching:  { label: "TEACHING",  color: "text-sky-400 border-sky-900" },
  org:       { label: "ORG",       color: "text-[#4a6080] border-[#1a2740]" },
  leadership:{ label: "LEADERSHIP",color: "text-emerald-400 border-emerald-900" },
  finance:   { label: "FINANCE",   color: "text-amber-400 border-amber-900" },
};

const DEFAULT_SHOW = 5;

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const visible = expanded ? experiences : experiences.slice(0, DEFAULT_SHOW);

  return (
    <section id="experience" className="border-b border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="h-12 flex items-center border-b border-[#1a2740]">
          <span className="font-mono text-[10px] tracking-widest text-[#4a6080]">
            03 / <span className="text-[#f5f5f5]">EXPERIENCE</span>
          </span>
        </div>

        <div className="py-16" ref={ref}>
          {/* Table header */}
          <div className="grid grid-cols-12 border-b border-[#1a2740] pb-2 mb-0 hidden md:grid">
            <div className="col-span-4 font-mono text-[10px] tracking-widest text-[#4a6080] uppercase">
              Role
            </div>
            <div className="col-span-4 font-mono text-[10px] tracking-widest text-[#4a6080] uppercase">
              Organization
            </div>
            <div className="col-span-3 font-mono text-[10px] tracking-widest text-[#4a6080] uppercase">
              Period
            </div>
            <div className="col-span-1 font-mono text-[10px] tracking-widest text-[#4a6080] uppercase text-right">
              Type
            </div>
          </div>

          {/* Rows */}
          <div>
            {visible.map((exp, i) => {
              const tc = typeConfig[exp.type];
              return (
                <motion.div
                  key={`${exp.organization}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.04 + i * 0.06 }}
                  className="grid grid-cols-12 py-4 border-b border-[#1a2740] group hover:bg-[#0d1829] transition-colors duration-150 -mx-4 px-4"
                >
                  {/* Role */}
                  <div className="col-span-12 md:col-span-4 mb-1 md:mb-0">
                    <span className="text-[#f5f5f5] text-sm group-hover:text-[#00ff88] transition-colors duration-150">
                      {exp.role}
                    </span>
                  </div>

                  {/* Organization */}
                  <div className="col-span-12 md:col-span-4 mb-1 md:mb-0">
                    <span className="text-[#4a6080] text-sm">{exp.organization}</span>
                  </div>

                  {/* Period */}
                  <div className="col-span-8 md:col-span-3">
                    <span className="font-mono text-[11px] text-[#4a6080] tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  {/* Type tag */}
                  <div className="col-span-4 md:col-span-1 flex justify-end items-start md:items-center">
                    <span
                      className={`font-mono text-[9px] border px-1.5 py-0.5 tracking-widest uppercase ${tc.color}`}
                    >
                      {tc.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expand toggle */}
          {experiences.length > DEFAULT_SHOW && (
            <div className="mt-6">
              <button
                onClick={() => setExpanded((e) => !e)}
                className="font-mono text-[11px] text-[#4a6080] hover:text-[#f5f5f5] transition-colors duration-150 tracking-widest uppercase group"
              >
                {expanded
                  ? `↑ SHOW LESS`
                  : `↓ SHOW ${experiences.length - DEFAULT_SHOW} MORE`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
