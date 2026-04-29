"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import NeuralBackground from "./NeuralBackground";
import { personal } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <NeuralBackground />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Open to work badge */}
        <motion.div {...fadeUp(0.1)} className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1a2d4a] bg-[#0d1729]/70 backdrop-blur-sm text-sm text-[#4a6280]">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[clamp(2.4rem,6vw,5.5rem)] font-extrabold tracking-tight leading-tight text-[#f0f4ff] mb-4"
        >
          {personal.name}
        </motion.h1>

        {/* Roles */}
        <motion.div {...fadeUp(0.3)} className="mb-5 flex justify-center gap-3 flex-wrap">
          {personal.roles.map((role, i) => (
            <span
              key={role}
              className={`text-lg font-semibold ${
                i === 0 ? "text-[#00d4ff]" : "text-[#4a6280]"
              }`}
            >
              {role}
              {i < personal.roles.length - 1 && (
                <span className="ml-3 text-[#1a2d4a]">·</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-lg md:text-xl text-[#4a6280] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00d4ff] text-[#0a0f1e] font-semibold text-sm hover:bg-[#00b8e0] transition-colors duration-200"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#1a2d4a] text-[#f0f4ff] font-semibold text-sm hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex justify-center items-center gap-5"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#4a6280] hover:text-[#f0f4ff] text-sm transition-colors duration-200"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <span className="text-[#1a2d4a]">|</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#4a6280] hover:text-[#f0f4ff] text-sm transition-colors duration-200"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <span className="text-[#1a2d4a]">|</span>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-[#4a6280] hover:text-[#f0f4ff] text-sm transition-colors duration-200"
          >
            <Mail size={16} />
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] text-[#4a6280] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-6 bg-gradient-to-b from-[#4a6280] to-transparent"
        />
      </motion.div>
    </section>
  );
}
