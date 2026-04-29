"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BrainCircuit } from "lucide-react";
import { stats, skillGroups } from "@/lib/data";

const highlights = [
  { value: stats.gpa, label: "GPA", sub: "Universitas Indonesia" },
  { value: stats.projects, label: "Projects", sub: "ML & Data Science" },
];

const allSkills = skillGroups.flatMap((g) => g.skills);

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 border-t border-[#1a2d4a]/60 section-glow">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Bio + skills + education */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-[#f0f4ff] mb-6"
            >
              Who I am
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-[#4a6280] leading-relaxed"
            >
              <p>
                I&apos;m a Mathematics student at{" "}
                <span className="text-[#f0f4ff] font-medium">Universitas Indonesia</span>,
                specializing in Data Science & Analytics. My work sits at the
                intersection of rigorous mathematical thinking and practical machine learning.
              </p>
              <p>
                I build end-to-end ML pipelines — from raw data cleaning and feature
                engineering through model training, evaluation, and deployment. My projects
                span NLP, computer vision, time series forecasting, and anomaly detection.
              </p>
              <p>
                Outside of data, I lead academic programs and coordinate competitions at
                the Mathematics department — which means I spend as much time organizing
                people as I do wrangling datasets.
              </p>
            </motion.div>

            {/* Tech stack badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-7"
            >
              <p className="text-xs font-semibold text-[#4a6280] tracking-widest uppercase mb-3">
                Tools & Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-[#4a6280] border border-[#1a2d4a] px-3 py-1.5 rounded-full hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1729] border border-[#1a2d4a] hover:border-[#00d4ff]/30 transition-colors duration-200">
                <GraduationCap size={18} className="text-[#00d4ff] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#f0f4ff] font-semibold text-sm">Bachelor of Mathematics</p>
                  <p className="text-[#4a6280] text-xs mt-0.5">Universitas Indonesia · GPA 3.51 · 2023 – 2027</p>
                  <p className="text-[#4a6280] text-xs mt-1">Mathematical Modeling · Data Science · Linear Models</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1729] border border-[#1a2d4a] hover:border-[#00d4ff]/30 transition-colors duration-200">
                <BrainCircuit size={18} className="text-[#00d4ff] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#f0f4ff] font-semibold text-sm">Mastering AI Engineer</p>
                  <p className="text-[#4a6280] text-xs mt-0.5">Non-Formal Education</p>
                  <p className="text-[#4a6280] text-xs mt-1">ML · Deep Learning · NLP · Computer Vision · LangChain · MLOps</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col gap-4 content-start">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="p-6 rounded-2xl bg-[#0d1729] border border-[#1a2d4a] hover:border-[#00d4ff]/40 transition-colors duration-200"
                >
                  <div className="text-3xl font-extrabold text-[#00d4ff] tabular-nums mb-1">
                    {h.value}
                  </div>
                  <div className="text-[#f0f4ff] font-semibold text-sm mb-0.5">{h.label}</div>
                  <div className="text-[#4a6280] text-xs">{h.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Open to work card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="p-5 rounded-2xl bg-[#00d4ff]/5 border border-[#00d4ff]/20"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="text-[#00d4ff] font-semibold text-sm">Open to opportunities</span>
              </div>
              <p className="text-[#4a6280] text-xs leading-relaxed">
                Internships · Research collaborations · Data science projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
