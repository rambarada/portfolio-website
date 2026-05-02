import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080b12",
        panel: "#0f1624",
        line: "#223048",
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
