"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-[#0d1729]/50 border-t border-[#1a2d4a]/60">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#f0f4ff] mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.08 }}
              className="p-6 rounded-2xl bg-[#0a0f1e] border border-[#1a2d4a] hover:border-[#00d4ff]/30 transition-colors duration-200"
            >
              <h3 className="text-[#f0f4ff] font-semibold text-sm mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-[#4a6280] bg-[#0d1729] border border-[#1a2d4a] px-3 py-1.5 rounded-full hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
