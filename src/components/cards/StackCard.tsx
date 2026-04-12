"use client";

import CardWrapper from "@/components/CardWrapper";
import { stackItems } from "@/lib/data";

export default function StackCard() {
  return (
    <CardWrapper
      className="card-stack p-6"
      bg="#1a1a1a"
      delay={0.16}
    >
      <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em] mb-5">
        Core Stack
      </p>
      <div className="grid grid-cols-4 gap-2">
        {stackItems.map((item) => (
          <div
            key={item.label}
            title={item.label}
            className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl cursor-default group"
            style={{ backgroundColor: item.bg }}
          >
            <span
              className="text-[11px] font-bold tracking-wide"
              style={{ color: item.text }}
            >
              {item.short}
            </span>
            <span className="text-[9px] text-[#555555] group-hover:text-[#888888] transition-colors text-center leading-tight font-medium truncate w-full text-center">
              {item.label.length > 6 ? item.label.slice(0, 6) : item.label}
            </span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
