"use client";

import CardWrapper from "@/components/CardWrapper";
import { skillGroups } from "@/lib/data";

export default function SkillsCard() {
  return (
    <CardWrapper
      className="card-skills p-6"
      bg="#1a1a1a"
      delay={0.15}
    >
      <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em] mb-5">
        Skills
      </p>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[#3d3d3d] text-[10px] font-semibold uppercase tracking-widest mb-2">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-medium text-[#666666] bg-[#141414] border border-[#242424] px-2 py-1 rounded-md hover:text-[#f5f5f5] hover:border-[#333333] transition-colors duration-150 uppercase tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
