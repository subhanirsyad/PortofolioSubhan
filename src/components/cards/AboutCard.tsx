"use client";

import CardWrapper from "@/components/CardWrapper";

const tags = [
  "NLP",
  "Time Series",
  "Computer Vision",
  "Anomaly Detection",
  "Statistical Modeling",
  "Predictive Analytics",
];

export default function AboutCard() {
  return (
    <CardWrapper
      className="card-about p-6 flex flex-col justify-between"
      bg="#141414"
      delay={0.2}
    >
      <div>
        <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em] mb-5">
          About
        </p>
        <div className="space-y-3 text-[#888888] text-sm leading-relaxed">
          <p>
            I&apos;m a Mathematics student at{" "}
            <span className="text-[#f5f5f5] font-medium">
              Universitas Indonesia
            </span>
            , specializing in data science and machine learning.
          </p>
          <p>
            I build end-to-end ML pipelines — from raw data and feature
            engineering through model training, evaluation, and deployment.
          </p>
          <p>
            Outside of data, I lead academic programs and coordinate
            competitions at the Mathematics department.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium text-[#555555] bg-[#1f1f1f] border border-[#2a2a2a] px-2.5 py-1 rounded-md uppercase tracking-wide hover:text-[#f5f5f5] hover:border-[#333333] transition-colors duration-150"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardWrapper>
  );
}
