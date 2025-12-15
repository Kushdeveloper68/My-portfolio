/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base palette (1st config prioritized)
        primary: "#0da2e7",           // from 1st
        "primary-dark": "#0a8bc5",    // from 1st
        secondary: "#1d2e38",         // from 3rd
        "primary-glow": "#0da2e7",    // from 4th
        "secondary-glow": "#00f0ff",  // from 4th

        "background-light": "#f5f7f8", // common
        "background-dark": "#101c22",  // from 1st/2nd/3rd/5th/7th (main)
        "background-dark-deep": "#050a0e", // from 4th
        "background-dark-void": "#050a0f", // from 6th

        "surface-dark": "#16262e",      // from 1st (main)
        "surface-dark-alt": "#16252d",  // from 3rd
        "surface-dark-soft": "#0f1921", // from 4th
        "surface-dark-deep": "#0f161e", // from 6th
        "surface-dark-card": "#182b34", // from 7th

        "card-dark": "rgba(23, 37, 44, 0.7)",              // from 5th
        "accent-glow": "rgba(13, 162, 231, 0.4)",          // from 3rd
        "accent-cyan": "#00f0ff",                          // from 6th

        "glass-border": "rgba(255, 255, 255, 0.08)",       // 2nd/4th/6th
        "glass-bg": "rgba(16, 28, 34, 0.6)",               // from 2nd (closest to 1st)
        "glass-bg-alt": "rgba(16, 29, 35, 0.6)",           // from 4th
        "glass-bg-soft": "rgba(13, 147, 242, 0.03)",       // from 6th

        "border-dark": "#315768",                          // from 7th
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"], // 1st and others
        body: ["Noto Sans", "sans-serif"],        // 2nd & 6th
        sans: ["Space Grotesk", "sans-serif"],    // 4th
      },

      backgroundImage: {
        // main grid from 1st
        "grid-pattern":
          "linear-gradient(to right, #1f2e35 1px, transparent 1px), linear-gradient(to bottom, #1f2e35 1px, transparent 1px)",

        // alternate grid from 6th
        "grid-pattern-alt":
          "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",

        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // 3rd/4th

        "tech-grid":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230da2e7' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")", // 3rd

        "tech-grid-soft":
          "linear-gradient(rgba(13, 162, 231, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 162, 231, 0.03) 1px, transparent 1px)", // 4th

        "glow-radial":
          "radial-gradient(circle at center, rgba(13, 162, 231, 0.15) 0%, transparent 70%)", // 5th
      },

      boxShadow: {
        neon: "0 0 10px rgba(13, 162, 231, 0.3), 0 0 20px rgba(13, 162, 231, 0.1)", // 3rd/4th
        "neon-strong":
          "0 0 15px rgba(13, 162, 231, 0.6), 0 0 30px rgba(13, 162, 231, 0.2)", // 3rd
        "neon-hover":
          "0 0 30px -5px rgba(13, 147, 242, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)", // 6th
      },

      borderRadius: {
        // keep the richest set that covers all uses
        DEFAULT: "0.5rem", // from 5th/6th/7th (bigger than 2nd)
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem", // from 6th
        full: "9999px",
      },

      animation: {
        // shared and page-specific animations
        float: "float 6s ease-in-out infinite",                     // 2nd/3rd
        "float-delayed": "float 6s ease-in-out 3s infinite",        // 2nd
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite", // 2nd/7th
        "slide-in-right": "slideInRight 0.8s ease-out forwards",    // 2nd
        "slide-in-up": "slideInUp 0.8s ease-out forwards",          // 2nd
        "spin-slow": "spin 20s linear infinite",                    // 3rd
        "pulse-glow":
          "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",    // 3rd
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: 1,
            boxShadow: "0 0 10px rgba(13, 162, 231, 0.3)",
          },
          "50%": {
            opacity: 0.7,
            boxShadow: "0 0 20px rgba(13, 162, 231, 0.6)",
          },
        },
      },
    },
  },
  plugins: [],
};
