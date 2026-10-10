"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { id: "home", href: "/", label: "Home" },
  { id: "about", href: "/#about", label: "About" },
  { id: "experience", href: "/#experience", label: "Experience" },
  { id: "projects", href: "/#projects", label: "Projects" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

// Sections in page order; the last one whose top has passed the navbar is the active one.
const sectionIds = ["about", "experience", "projects", "contact"];

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname.startsWith("/projects") ? "projects" : "");
      return;
    }
    const onScroll = () => {
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <div className="max-w-6xl mx-auto rounded-2xl border border-[#1a2d4a] bg-[#0d1729]/80 backdrop-blur-md shadow-[0_12px_40px_-16px_rgba(0,0,0,0.9)]">
        <div className="h-16 px-5 flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "location" : undefined}
                className={`text-sm transition-colors duration-200 ${
                  active === link.id
                    ? "text-[#00d4ff] font-semibold"
                    : "text-[#6b7fa0] font-medium hover:text-[#f0f4ff]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-[#1a2d4a] text-[#f0f4ff] text-sm font-semibold hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-colors duration-200"
            >
              CV
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00d4ff] text-[#0a0f1e] text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(0,212,255,0.6)] hover:bg-[#00b8e0] transition-colors duration-200"
            >
              <Mail size={16} />
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden p-2 -mr-2 text-[#f0f4ff]"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden border-t border-[#1a2d4a] px-5 py-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-sm ${
                  active === link.id ? "text-[#00d4ff] font-semibold" : "text-[#c5d0e6] font-medium"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 text-sm font-medium text-[#c5d0e6] sm:hidden"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
