"use client";

import CardWrapper from "@/components/CardWrapper";

export default function StatusCard() {
  return (
    <CardWrapper
      className="card-status p-6 flex flex-col justify-between min-h-[120px]"
      bg="#141414"
      delay={0.08}
    >
      <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em]">
        Status
      </p>
      <div className="flex items-center gap-2.5 mt-auto pt-4">
        <span className="relative flex h-2.5 w-2.5">
          <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[#f5f5f5] text-sm font-medium">
          Available for internship
        </span>
      </div>
    </CardWrapper>
  );
}
