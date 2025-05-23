/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#141414",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#e50914",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#181818",
          foreground: "#ffffff",
        },
        red: {
          500: "#e50914",
          600: "#b81d24",
          700: "#831010",
        },
        gray: {
          900: "#141414",
          800: "#181818",
          700: "#232323",
          600: "#2d2d2d",
          500: "#3d3d3d",
          400: "#646464",
          300: "#969696",
          200: "#b3b3b3",
          100: "#e5e5e5",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        amharic: ['"Noto Serif Ethiopic"', "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
