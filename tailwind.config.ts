import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFA5B8",
          hover: "#FF8FA3",
          light: "#FFE5EB",
        },
        secondary: {
          DEFAULT: "#E5DEFF",
          hover: "#D1C6FF",
        },
        accent: {
          DEFAULT: "#B8F5D4",
          hover: "#95F0C0",
        },
        kawaii: {
          cream: "#FFF9F5",
          purple: "#1A1F2C",
          gray: "#8E9196",
        },
      },
      keyframes: {
        "bounce-small": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "pop": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "bounce-small": "bounce-small 0.5s ease-in-out",
        "pop": "pop 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;