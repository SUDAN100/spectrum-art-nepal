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
        primary: {
          DEFAULT: "#7B302F",
          hover: "#622524",
          light: "#9A403F",
          dark: "#4E1D1C",
          50: "#FDF8F7",
          100: "#F8EDE9",
          200: "#ECCFC8",
          300: "#DFB1A7",
          400: "#B85B59",
          500: "#9E3E3D",
          600: "#8E3534",
          700: "#7B302F",
          800: "#602423",
          900: "#451A19",
        },
        secondary: {
          DEFAULT: "#F8F6F2",
          surface: "#F4F0E8",
        },
        accent: {
          DEFAULT: "#D9C8B8",
          light: "#EAE1D7",
          dark: "#B8A38F",
        },
        charcoal: {
          DEFAULT: "#292929",
          light: "#404040",
          muted: "#666666",
          subtle: "#8A8A8A",
          border: "#E2DDD7",
        },
        background: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        art: "0 10px 30px -10px rgba(123, 48, 47, 0.08)",
        "art-hover": "0 20px 40px -15px rgba(123, 48, 47, 0.16)",
        card: "0 4px 20px -2px rgba(41, 41, 41, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
