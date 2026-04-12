"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { allTechBadges, skills } from "@/lib/data";

const categories = [
  {
    label: "LANGUAGES",
    items: skills.languages,
  },
  {
    label: "FRAMEWORKS & LIBS",
    items: skills.frameworks,
  },
  {
    label: "TOOLS & PLATFORMS",
    items: skills.tools,
  },
  {
    label: "SPECIALIZATIONS",
    items: skills.specializations,
  },
];

function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...allTechBadges, ...allTechBadges];

  return (
    <div className="marquee-wrapper py-4 border-y border-[#1a2740] bg-[#0d1829]">
      <div className="marquee-inner">
        {doubled.map((badge, i) => (
          <span
            key={i}
            className="font-mono text-[11px] tracking-widest text-[#4a6080] mx-5 uppercase hover:text-[#00ff88] transition-colors duration-150 select-none"
          >
            {badge}
            <span className="ml-5 text-[#1a2740]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="border-b border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="h-12 flex items-center border-b border-[#1a2740]">
          <span className="font-mono text-[10px] tracking-widest text-[#4a6080]">
            02 / <span className="text-[#f5f5f5]">SKILLS</span>
          </span>
        </div>
      </div>

      {/* Marquee — full width */}
      <Marquee />

      <div className="max-w-7xl mx-auto px-6 py-16" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#1a2740]">
          {categories.map((cat, colIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + colIdx * 0.1 }}
              className={`p-6 ${colIdx > 0 ? "border-t md:border-t-0 border-[#1a2740] md:border-l md:border-[#1a2740]" : ""}`}
            >
              <div className="font-mono text-[10px] tracking-widest text-[#4a6080] mb-4">
                {cat.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] text-[#f5f5f5] border border-[#1a2740] px-2 py-1 tracking-wide bg-[#0d1829] hover:border-[#2a3f60] hover:text-[#00ff88] transition-colors duration-150 uppercase"
                  >
                    {item}
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
