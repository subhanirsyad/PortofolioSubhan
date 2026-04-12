"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";

const links = [
  { label: "EMAIL", value: personal.email, href: `mailto:${personal.email}` },
  { label: "LINKEDIN", value: "subhan-irsyaduddien-alhaq", href: personal.linkedin },
  { label: "GITHUB", value: "subhanirsyad", href: personal.github },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="border-b border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="h-12 flex items-center border-b border-[#1a2740]">
          <span className="font-mono text-[10px] tracking-widest text-[#4a6080]">
            05 / <span className="text-[#f5f5f5]">CONTACT</span>
          </span>
        </div>

        <div className="py-24 flex flex-col items-center text-center" ref={ref}>
          {/* Big line */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,5vw,4rem)] font-extrabold text-[#f5f5f5] tracking-tight mb-4"
          >
            Let&apos;s build something.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[#4a6080] text-sm max-w-md mb-16"
          >
            Open to internships, research collaborations, and data science
            projects. I respond within a day.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 items-center"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "EMAIL" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="flex items-center gap-4 group"
              >
                <span className="font-mono text-[10px] tracking-widest text-[#4a6080] w-20 text-right group-hover:text-[#00ff88] transition-colors duration-150">
                  {link.label}
                </span>
                <span className="w-px h-4 bg-[#1a2740]" />
                <span className="font-mono text-sm text-[#4a6080] group-hover:text-[#f5f5f5] transition-colors duration-150">
                  {link.value}
                </span>
                <span className="text-[#4a6080] group-hover:text-[#f5f5f5] group-hover:translate-x-0.5 inline-block transition-all duration-150">
                  ↗
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-[#1a2740] w-full max-w-xs"
          >
            <span className="font-mono text-[10px] text-[#4a6080] tracking-widest">
              JAKARTA, INDONESIA · 2026
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
