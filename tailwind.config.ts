import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        panel: "var(--color-panel)",
        line: "var(--color-line)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        subdued: "var(--color-subdued)",
        wash: "var(--color-wash)",
        accent: "#4fd1c5",
        skysoft: "#7dd3fc",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 209, 197, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
