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
        bg: "#0c0c0c",
        "card-1": "#141414",
        "card-2": "#1a1a1a",
        border: "#222222",
        accent: "#e8ff47",
        "text-primary": "#f5f5f5",
        "text-muted": "#555555",
        "text-muted-2": "#888888",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
