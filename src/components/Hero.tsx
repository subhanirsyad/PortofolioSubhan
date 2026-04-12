"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personal, stats } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

function DataPanel() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1600);
    return () => clearInterval(id);
  }, []);

  const rows = [
    { key: "MODELS_TRAINED", value: stats.modelsTrained.toString() },
    { key: "ACCURACY_MAX", value: stats.accuracy },
    { key: "DATASETS_PROCESSED", value: "12+" },
    { key: "INSTITUTION", value: "UNIV_INDONESIA" },
    { key: "FIELD", value: "MATHEMATICS" },
    { key: "GPA", value: stats.gpa },
  ];

  const stackLines = [
    "> Python · SQL · TensorFlow",
    "> Scikit-learn · Keras · R",
    "> Pandas · NumPy · Tableau",
  ];

  return (
    <div className="scanlines relative border border-[#1a2740] bg-[#0d1829] h-full min-h-[380px] flex flex-col font-mono text-xs">
      {/* Panel header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#1a2740] bg-[#080f1a]">
        <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
        <span className="text-[#4a6080] text-[10px] tracking-widest uppercase">
          analytics.core / live
        </span>
        <span className="ml-auto text-[#4a6080] text-[10px]">
          {tick % 2 === 0 ? "●" : "○"} SYNC
        </span>
      </div>

      {/* Stats block */}
      <div className="p-4 border-b border-[#1a2740] space-y-1.5">
        {rows.map((row) => (
          <div key={row.key} className="flex items-center justify-between">
            <span className="text-[#4a6080] text-[10px] tracking-wider">
              {row.key}
            </span>
            <span className="text-[#00ff88] text-[10px] tabular-nums">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Stack block */}
      <div className="p-4 border-b border-[#1a2740]">
        <div className="text-[#4a6080] text-[10px] tracking-widest mb-2">
          STACK
        </div>
        {stackLines.map((line, i) => (
          <div key={i} className="text-[#f5f5f5] text-[10px] leading-5">
            {line}
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="p-4 mt-auto">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[#00ff88]"
            style={{
              animation: "pulseGreen 2s ease-in-out infinite",
            }}
          />
          <span className="text-[10px] tracking-widest text-[#00ff88]">
            STATUS
          </span>
          <span className="text-[10px] tracking-widest text-[#f5f5f5] ml-auto">
            OPEN_TO_WORK
          </span>
        </div>
      </div>

      {/* Bottom line — simulated terminal cursor */}
      <div className="px-4 pb-3">
        <span className="text-[#4a6080] text-[10px]">›</span>
        <span
          className="inline-block w-1.5 h-3 bg-[#00ff88] ml-0.5 align-middle"
          style={{ animation: "blink 1s step-end infinite" }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-12 border-b border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-12 gap-0">
        {/* Left — 7 cols */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-16 border-r-0 lg:border-r border-[#1a2740] py-12">
          {/* Breadcrumb */}
          <motion.div {...fadeUp(0.1)} className="mb-8">
            <span className="font-mono text-[10px] tracking-widest text-[#4a6080]">
              ~/home/portfolio —{" "}
              <span className="text-[#00ff88]">v2.0</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold tracking-[-0.04em] leading-[0.92] text-[#f5f5f5] uppercase mb-4"
          >
            {personal.name}
          </motion.h1>

          {/* Title */}
          <motion.div {...fadeUp(0.3)} className="mb-6">
            <span className="font-mono text-lg text-[#4a6080] tracking-wide">
              {personal.title}{" "}
              <span className="text-[#f5f5f5]">↗</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-[#4a6080] text-base leading-relaxed max-w-lg mb-12"
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex gap-8 items-center">
            <a
              href="#projects"
              className="font-mono text-sm text-[#f5f5f5] hover:text-[#00ff88] transition-colors duration-150 group"
            >
              View projects{" "}
              <span className="group-hover:translate-x-1 inline-block transition-transform duration-150">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="font-mono text-sm text-[#4a6080] hover:text-[#f5f5f5] transition-colors duration-150 group"
            >
              Get in touch{" "}
              <span className="group-hover:translate-x-1 inline-block transition-transform duration-150">
                →
              </span>
            </a>
          </motion.div>

          {/* Horizontal rule with label */}
          <motion.div
            {...fadeUp(0.6)}
            className="mt-16 pt-6 border-t border-[#1a2740] flex gap-8"
          >
            <div className="font-mono text-[10px]">
              <span className="text-[#4a6080] tracking-widest">UNIV</span>
              <span className="block text-[#f5f5f5] mt-0.5">
                Universitas Indonesia
              </span>
            </div>
            <div className="font-mono text-[10px]">
              <span className="text-[#4a6080] tracking-widest">FIELD</span>
              <span className="block text-[#f5f5f5] mt-0.5">Mathematics</span>
            </div>
            <div className="font-mono text-[10px]">
              <span className="text-[#4a6080] tracking-widest">GPA</span>
              <span className="block text-[#00ff88] mt-0.5">{stats.gpa}</span>
            </div>
          </motion.div>
        </div>

        {/* Right — 5 cols */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 flex items-center pl-0 lg:pl-12 py-12"
        >
          <div className="w-full">
            <DataPanel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
