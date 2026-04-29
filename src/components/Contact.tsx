"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "@/lib/data";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "subhan-irsyaduddien-alhaq",
    href: personal.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "subhanirsyad",
    href: personal.github,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 border-t border-[#1a2d4a]/60">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
        >
          Contact
        </motion.p>

        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-extrabold text-[#f0f4ff] tracking-tight mb-4"
          >
            Let&apos;s work together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#4a6280] text-base leading-relaxed mb-10"
          >
            Open to internships, research collaborations, and data science projects.
            I respond within a day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#1a2d4a] bg-[#0d1729] hover:border-[#00d4ff]/40 hover:bg-[#0d1729] group transition-all duration-200"
                >
                  <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                    <Icon size={15} className="text-[#00d4ff]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#4a6280]">{link.label}</p>
                    <p className="text-[#f0f4ff] text-sm font-medium group-hover:text-[#00d4ff] transition-colors duration-200">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-[#4a6280] group-hover:text-[#00d4ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
