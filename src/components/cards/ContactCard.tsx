"use client";

import CardWrapper from "@/components/CardWrapper";
import { personal } from "@/lib/data";

const links = [
  { label: "Email",    value: personal.email,    href: `mailto:${personal.email}` },
  { label: "LinkedIn", value: "subhan-irsyaduddien-alhaq", href: personal.linkedin },
  { label: "GitHub",   value: "subhanirsyad",    href: personal.github },
];

export default function ContactCard() {
  return (
    <CardWrapper
      className="card-contact md-full p-8 lg:p-12"
      bg="#111111"
      delay={0.1}
      style={{
        background:
          "radial-gradient(ellipse at 50% 120%, rgba(232,255,71,0.05) 0%, transparent 60%), #111111",
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        {/* Left */}
        <div>
          <p className="text-[#555555] text-xs font-medium uppercase tracking-[0.18em] mb-4">
            Contact
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold text-[#f5f5f5] tracking-tight leading-[1.05] mb-3">
            Let&apos;s work together.
          </h2>
          <p className="text-[#555555] text-sm max-w-md">
            Open to internships, research collaborations, and data science
            projects. I respond within a day.
          </p>
        </div>

        {/* Right — links */}
        <div className="flex flex-col gap-3 lg:items-end">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <span className="text-[10px] font-medium text-[#333333] uppercase tracking-widest group-hover:text-[#e8ff47] transition-colors duration-150 w-16 lg:text-right">
                {link.label}
              </span>
              <span className="text-sm text-[#555555] group-hover:text-[#f5f5f5] transition-colors duration-150">
                {link.value}
              </span>
              <span className="text-[#333333] group-hover:text-[#f5f5f5] group-hover:translate-x-0.5 inline-block transition-all duration-150">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
        <span className="text-[10px] text-[#2a2a2a] font-medium uppercase tracking-widest">
          Jakarta, Indonesia · 2026
        </span>
        <span className="text-[10px] text-[#2a2a2a] font-medium uppercase tracking-widest">
          Built with Next.js
        </span>
      </div>
    </CardWrapper>
  );
}
