"use client";

import CardWrapper from "@/components/CardWrapper";
import { personal } from "@/lib/data";

export default function NameCard() {
  return (
    <CardWrapper
      className="card-name md-full noise-bg p-8 lg:p-10 flex flex-col justify-between min-h-[320px] lg:min-h-[400px]"
      bg="#141414"
      delay={0}
      style={{
        background:
          "radial-gradient(ellipse at 85% 110%, rgba(232,255,71,0.055) 0%, transparent 55%), #141414",
      }}
    >
      {/* Top */}
      <div>
        <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em] mb-5">
          Data Scientist
        </p>
        <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-extrabold text-[#f5f5f5] tracking-[-0.03em] leading-[0.95] mb-5">
          Subhan
          <br />
          Irsyaduddien
        </h1>
        <p className="text-[#555555] text-sm font-medium mb-3">
          {personal.subtitle}
        </p>
        <p className="text-[#777777] text-sm leading-relaxed max-w-sm">
          {personal.bio}
        </p>
      </div>

      {/* Bottom CTAs */}
      <div className="flex items-center gap-8 mt-8">
        <a
          href="#projects"
          className="text-[#f5f5f5] text-sm font-medium hover:text-[#e8ff47] transition-colors duration-150 group flex items-center gap-1.5"
        >
          View projects
          <span className="group-hover:translate-x-1 inline-block transition-transform duration-150">
            →
          </span>
        </a>
        <a
          href="#contact"
          className="text-[#555555] text-sm font-medium hover:text-[#f5f5f5] transition-colors duration-150 group flex items-center gap-1.5"
        >
          Get in touch
          <span className="group-hover:translate-x-1 inline-block transition-transform duration-150">
            →
          </span>
        </a>
      </div>
    </CardWrapper>
  );
}
