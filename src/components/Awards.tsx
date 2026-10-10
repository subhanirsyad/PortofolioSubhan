"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy } from "lucide-react";
import { awards } from "@/lib/data";

export default function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="awards" className="py-24 border-t border-[#1a2d4a]/60 section-glow">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
        >
          Awards
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#f0f4ff] mb-12"
        >
          Recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#0d1729] border border-[#1a2d4a] hover:border-[#00d4ff]/30 transition-colors duration-200"
            >
              <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                <Trophy size={16} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="text-[#f0f4ff] font-semibold text-sm leading-snug">{a.title}</p>
                <p className="text-[#6b7fa0] text-xs mt-1">
                  {a.org} · {a.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
