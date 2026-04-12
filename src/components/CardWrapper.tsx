"use client";

import { motion } from "framer-motion";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  bg?: string;
  style?: React.CSSProperties;
}

export default function CardWrapper({
  children,
  className = "",
  delay = 0,
  bg = "#141414",
  style,
}: CardWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.18, ease: "easeOut" } }}
      style={{ backgroundColor: bg, ...style }}
      className={`relative border border-[#222222] hover:border-[#333333] rounded-2xl overflow-hidden transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}
