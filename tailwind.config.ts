import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f5f0e8",
          muted: "#ebe3d4",
          deep: "#e0d4c4",
        },
        ink: "#0a0a0a",
        charcoal: "#1a1a1a",
        gold: {
          DEFAULT: "#9a7b4f",
          muted: "#b09a72",
          soft: "#c9b896",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "panel-texture":
          "radial-gradient(ellipse at 30% 20%, rgba(154,123,79,0.08) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
