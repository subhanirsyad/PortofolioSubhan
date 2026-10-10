"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personal } from "@/lib/data";

const links = [
  { icon: LinkedinIcon, label: "LinkedIn", value: "subhan-irsyaduddien-alhaq", href: personal.linkedin },
  { icon: GithubIcon, label: "GitHub", value: "subhanirsyad", href: personal.github },
];

const field =
  "w-full rounded-xl border border-[#1a2d4a] bg-[#0a0f1e] px-4 py-3 text-sm text-[#f0f4ff] placeholder:text-[#4a6280] focus:border-[#00d4ff]/60 focus:outline-none transition-colors duration-200";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  // No backend: opens the visitor's mail app with the message filled in.
  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio message from ${f.get("name")}`;
    const body = `${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-[#1a2d4a]/60 section-glow">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4"
        >
          Contact
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — pitch + direct links */}
          <div>
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
              className="text-[#6b7fa0] text-base leading-relaxed mb-8"
            >
              Open to data science and analytics roles, research collaborations, and data projects. Send a
              message or reach me directly. I respond within a day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              {/* Email: copy is the main action, the icon opens the mail app */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-[#1a2d4a] bg-[#0d1729] hover:border-[#00d4ff]/40 transition-colors duration-200">
                <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <Mail size={15} className="text-[#00d4ff]" />
                </div>
                <button type="button" onClick={copyEmail} className="flex-1 min-w-0 text-left group">
                  <p className="text-xs text-[#6b7fa0]">Email</p>
                  <p className="text-[#f0f4ff] text-sm font-medium truncate group-hover:text-[#00d4ff] transition-colors duration-200">
                    {personal.email}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-[#6b7fa0]" aria-live="polite">
                    {copied ? (
                      <>
                        <Check size={12} className="text-[#00d4ff]" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={12} /> Click to copy
                      </>
                    )}
                  </p>
                </button>
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Open in mail app"
                  className="p-2 text-[#6b7fa0] hover:text-[#00d4ff] transition-colors duration-200"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-[#1a2d4a] bg-[#0d1729] hover:border-[#00d4ff]/40 group transition-all duration-200"
                  >
                    <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                      <Icon size={15} className="text-[#00d4ff]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#6b7fa0]">{link.label}</p>
                      <p className="text-[#f0f4ff] text-sm font-medium truncate group-hover:text-[#00d4ff] transition-colors duration-200">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#6b7fa0] group-hover:text-[#00d4ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right — message form */}
          <motion.form
            onSubmit={send}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0d1729] border border-[#1a2d4a] space-y-5"
          >
            <div>
              <h3 className="text-xl font-bold text-[#f0f4ff]">Send a message</h3>
              <p className="mt-1.5 text-sm text-[#6b7fa0] leading-relaxed">
                This opens your email app with the message filled in, addressed to{" "}
                <span className="text-[#00d4ff]">{personal.email}</span>.
              </p>
            </div>

            <div>
              <label htmlFor="c-name" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                Your name
              </label>
              <input id="c-name" name="name" required autoComplete="name" className={field} />
            </div>
            <div>
              <label htmlFor="c-email" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                Your email
              </label>
              <input id="c-email" name="email" type="email" required autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="c-message" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                Message
              </label>
              <textarea id="c-message" name="message" required rows={5} className={`${field} resize-y`} />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#00d4ff] text-[#0a0f1e] font-semibold text-sm hover:bg-[#00b8e0] transition-colors duration-200"
            >
              <Send size={16} />
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
