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
        deep: {
          DEFAULT: "#0c0a1a",
          50: "#1a1830",
          100: "#151329",
          200: "#0f0e22",
        },
        navy: {
          DEFAULT: "#0f1629",
          50: "#1a2340",
          100: "#151d38",
          200: "#111830",
        },
        midnight: {
          DEFAULT: "#151a30",
          50: "#1e2445",
          100: "#1a203b",
        },
        gold: {
          50: "#fdfbf5",
          100: "#faf4e1",
          200: "#f4e5b8",
          300: "#e6ce86",
          400: "#d4af37",
          500: "#b89225",
          600: "#967418",
          700: "#8c6514",
          800: "#705010",
          900: "#5a400d",
        },
        rose: {
          50: "#fdf2f6",
          100: "#fbe8ef",
          200: "#f7c3d0",
          300: "#e8a0b5",
          400: "#de7a95",
          500: "#c4687e",
        },
        cream: {
          DEFAULT: "#faf3e0",
          50: "#fffdf8",
          100: "#fdf8ed",
        },
        sage: {
          50: "#f6f9f5",
          100: "#edf3ea",
          200: "#dde8d6",
          300: "#c1d5b6",
          400: "#9fb992",
          500: "#759367",
          600: "#5a7050",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-playfair)", "Cormorant Garamond", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        script: ["var(--font-great-vibes)", "Brush Script MT", "cursive"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-montserrat)", "Inter", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(212, 175, 55, 0.3)",
        "gold-glow": "0 0 40px rgba(212, 175, 55, 0.35), 0 0 80px rgba(212, 175, 55, 0.15)",
        "gold-soft": "0 0 20px rgba(212, 175, 55, 0.15)",
        soft: "0 20px 50px -10px rgba(0, 0, 0, 0.5)",
        card: "0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.1)",
        "inner-glow": "inset 0 0 30px rgba(212, 175, 55, 0.08)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
        "spin-slow": "spin 20s linear infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
