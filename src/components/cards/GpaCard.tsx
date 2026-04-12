"use client";

import CardWrapper from "@/components/CardWrapper";

export default function GpaCard() {
  return (
    <CardWrapper
      className="card-gpa p-6 flex flex-col justify-between min-h-[120px]"
      bg="#141414"
      delay={0.12}
      style={{
        background:
          "radial-gradient(ellipse at 100% 100%, rgba(232,255,71,0.07) 0%, transparent 60%), #141414",
      }}
    >
      <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em]">
        GPA
      </p>
      <div className="mt-auto pt-2">
        <span className="text-[3.2rem] font-extrabold text-[#e8ff47] tracking-tight leading-none">
          3.51
        </span>
        <p className="text-[#555555] text-xs mt-1.5 font-medium">
          Universitas Indonesia
        </p>
      </div>
    </CardWrapper>
  );
}
