/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#3b82f6",   // Blue 500
        dark: "#0f172a",      // Slate 900
        darker: "#020617",    // Slate 950
        secondary: "#94a3b8", // Slate 400
      },
    },
  },
  plugins: [],
}
