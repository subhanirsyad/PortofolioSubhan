"use client";

import { useState } from "react";
import CardWrapper from "@/components/CardWrapper";
import { experiences, type ExperienceType } from "@/lib/data";

const typeStyle: Record<ExperienceType, string> = {
  teaching:   "text-sky-400 bg-sky-950/50",
  org:        "text-[#555555] bg-[#1f1f1f]",
  leadership: "text-emerald-400 bg-emerald-950/50",
  finance:    "text-amber-400 bg-amber-950/50",
};

const typeLabel: Record<ExperienceType, string> = {
  teaching:   "Teaching",
  org:        "Org",
  leadership: "Leadership",
  finance:    "Finance",
};

const DEFAULT_SHOW = 5;

export default function ExperienceCard() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, DEFAULT_SHOW);

  return (
    <CardWrapper
      className="card-exp md-full p-6"
      bg="#141414"
      delay={0.1}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em]">
          Experience
        </p>
        <span className="text-[#333333] text-xs tabular-nums">
          {experiences.length} roles
        </span>
      </div>

      {/* Table header */}
      <div className="hidden md:grid grid-cols-12 pb-2 mb-1 border-b border-[#1e1e1e]">
        <span className="col-span-5 text-[10px] font-medium text-[#333333] uppercase tracking-widest">Role</span>
        <span className="col-span-4 text-[10px] font-medium text-[#333333] uppercase tracking-widest">Organization</span>
        <span className="col-span-2 text-[10px] font-medium text-[#333333] uppercase tracking-widest">Period</span>
        <span className="col-span-1 text-[10px] font-medium text-[#333333] uppercase tracking-widest text-right">Type</span>
      </div>

      <div className="divide-y divide-[#1e1e1e]">
        {visible.map((exp, i) => (
          <div
            key={i}
            className="py-3 md:grid md:grid-cols-12 md:items-center gap-2 group hover:bg-[#191919] -mx-2 px-2 rounded-lg transition-colors duration-150"
          >
            <span className="md:col-span-5 text-[#f5f5f5] text-sm font-medium block md:inline group-hover:text-[#e8ff47] transition-colors duration-150">
              {exp.role}
            </span>
            <span className="md:col-span-4 text-[#555555] text-xs block md:inline mt-0.5 md:mt-0">
              {exp.organization}
            </span>
            <span className="md:col-span-2 text-[#3d3d3d] text-xs font-medium block md:inline mt-0.5 md:mt-0 tabular-nums">
              {exp.period}
            </span>
            <div className="md:col-span-1 flex md:justify-end mt-1.5 md:mt-0">
              <span
                className={`text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wide ${typeStyle[exp.type]}`}
              >
                {typeLabel[exp.type]}
              </span>
            </div>
          </div>
        ))}
      </div>

      {experiences.length > DEFAULT_SHOW && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-4 text-[11px] font-medium text-[#444444] hover:text-[#f5f5f5] transition-colors duration-150 uppercase tracking-widest"
        >
          {expanded ? "↑ Show less" : `↓ Show ${experiences.length - DEFAULT_SHOW} more`}
        </button>
      )}
    </CardWrapper>
  );
}
