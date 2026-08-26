import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#17211f",
          100: "#263630",
          200: "#3b4d46",
          300: "#40544c",
          400: "#5c7168",
          500: "#6d8177",
          600: "#82978d",
          700: "#c4d0ca",
          800: "#d8e2dc",
          900: "#e8efea",
          950: "#f7f9f6",
        },
        acid: "#5f9e1d",
        cyan: "#087f88",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(138, 203, 47, 0.24), 0 18px 60px rgba(43, 75, 62, 0.14)",
        "glow-sm": "0 0 32px rgba(138, 203, 47, 0.2)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "46%, 100%": { opacity: "0.25" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
