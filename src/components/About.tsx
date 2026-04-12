"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/lib/data";

const highlights = [
  { value: stats.gpa, label: "GPA", sub: "Universitas Indonesia" },
  { value: stats.projects, label: "PROJECTS", sub: "ML & Data Science" },
  { value: stats.accuracy, label: "PEAK_ACCURACY", sub: "Nutrition classifier" },
  { value: "3+", label: "YEARS", sub: "Analytical experience" },
];

function HighlightCell({
  value,
  label,
  sub,
  delay,
}: {
  value: string;
  label: string;
  sub: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 border border-[#1a2740] bg-[#0d1829] hover:border-[#2a3f60] transition-colors duration-200"
    >
      <div className="font-mono text-2xl font-bold text-[#00ff88] tabular-nums mb-1">
        {value}
      </div>
      <div className="font-mono text-[10px] tracking-widest text-[#f5f5f5] mb-1">
        {label}
      </div>
      <div className="font-mono text-[10px] text-[#4a6080]">{sub}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="border-b border-[#1a2740]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="h-12 flex items-center border-b border-[#1a2740]">
          <span className="font-mono text-[10px] tracking-widest text-[#4a6080]">
            01 / <span className="text-[#f5f5f5]">ABOUT</span>
          </span>
        </div>

        <div className="grid grid-cols-12 gap-0 py-16">
          {/* Left col */}
          <div
            ref={ref}
            className="col-span-12 lg:col-span-7 pr-0 lg:pr-16 border-r-0 lg:border-r border-[#1a2740]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-[#f5f5f5] tracking-tight mb-6"
            >
              Who I am
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 text-[#4a6080] text-sm leading-relaxed"
            >
              <p>
                I&apos;m a Mathematics student at{" "}
                <span className="text-[#f5f5f5]">Universitas Indonesia</span>,
                specializing in Data Science & Analytics. My work sits at the
                intersection of rigorous mathematical thinking and practical
                machine learning.
              </p>
              <p>
                I build end-to-end ML pipelines — from raw data cleaning and
                feature engineering through model training, evaluation, and
                deployment. My projects span NLP, computer vision, time series
                forecasting, and anomaly detection.
              </p>
              <p>
                Outside of data, I lead academic programs and coordinate
                competitions at the Mathematics department, which means I spend
                as much time organizing humans as I do wrangling datasets.
              </p>
              <p>
                Currently open to{" "}
                <span className="text-[#00ff88] font-mono text-xs">
                  internships · research collaborations · data science projects
                </span>
                .
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {[
                "NLP",
                "Time Series",
                "Computer Vision",
                "Anomaly Detection",
                "Statistical Modeling",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-[#4a6080] border border-[#1a2740] px-2 py-1 tracking-wide hover:border-[#2a3f60] hover:text-[#f5f5f5] transition-colors duration-150"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right col — highlight grid */}
          <div className="col-span-12 lg:col-span-5 pl-0 lg:pl-12 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-0">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={`${i > 0 ? (i % 2 === 0 ? "border-t border-[#1a2740]" : "") : ""} ${i === 1 || i === 3 ? "border-l border-[#1a2740]" : ""}`}
                >
                  <HighlightCell {...h} delay={0.1 + i * 0.08} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
