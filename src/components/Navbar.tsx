"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-md border-b border-[#1a2d4a]/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[#f0f4ff] font-bold text-lg tracking-tight">
          <span className="text-[#00d4ff]">S</span>ubhan
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#4a6280] hover:text-[#f0f4ff] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/subhanirsyad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a6280] hover:text-[#f0f4ff] transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/subhan-irsyaduddien-alhaq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a6280] hover:text-[#f0f4ff] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
