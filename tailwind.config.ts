import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1e",
        surface: "#0d1729",
        "surface-2": "#111e38",
        "border-col": "#1a2d4a",
        accent: "#00d4ff",
        "text-primary": "#f0f4ff",
        "text-muted": "#4a6280",
        "text-subtle": "#6b7fa0",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
