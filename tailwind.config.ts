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
        ivory: {
          50: "#FFFEFC",
          100: "#FDFAF6",
          200: "#F8F3EA",
          300: "#EFE5D5",
          400: "#E2D3BD",
        },
        blush: {
          50: "#FFF5F7",
          100: "#FDF0F3",
          200: "#FCE1E7",
          300: "#F7C3D0",
          400: "#EE9EB3",
          500: "#DE7A95",
        },
        gold: {
          50: "#FDFBF5",
          100: "#FAF4E1",
          200: "#F4E5B8",
          300: "#E6CE86",
          400: "#D4AF37",
          500: "#B89225",
          600: "#967418",
        },
        sage: {
          50: "#F6F9F5",
          100: "#EDF3EA",
          200: "#DDE8D6",
          300: "#C1D5B6",
          400: "#9FB992",
          500: "#759367",
        },
        accent: {
          dark: "#2A2521",
          muted: "#6A6059",
          border: "#E9DFD3",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Cormorant Garamond", "serif"],
        script: ["var(--font-great-vibes)", "Brush Script MT", "cursive"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-montserrat)", "Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(212, 175, 55, 0.25)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.35)",
        soft: "0 15px 35px -5px rgba(42, 37, 33, 0.08)",
        card: "0 20px 40px -15px rgba(184, 146, 37, 0.12), 0 0 20px 0 rgba(252, 225, 231, 0.35)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.88", transform: "scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
