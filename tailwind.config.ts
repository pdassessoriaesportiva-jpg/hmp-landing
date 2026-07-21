import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#050505",
        obsidian: "#0c0c0b",
        graphite: "#191919",
        gold: "#d9b45f",
        champagne: "#f4e6c2",
        ivory: "#f7f3ea",
        stonewarm: "#b8b2a8",
      },
      boxShadow: {
        gold: "0 28px 90px rgba(217, 180, 95, 0.16)",
        glass: "0 30px 120px rgba(0, 0, 0, 0.42)",
      },
      fontFamily: {
        sans: ["Inter", "Avenir Next", "SF Pro Display", "system-ui", "sans-serif"],
        display: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
