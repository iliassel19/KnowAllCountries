/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        700: "hsl(209, 23%, 22%)",
        800: "hsl(207, 26%, 17%)",
        900: "hsl(200, 15%, 8%)",
      },
      grey: {
        400: "hsl(0, 0%, 52%)",
        300: "hsl(0, 0%, 98%)",
        200: "hsl(0, 0%, 100%)",
      },
    },
    animation: {
      pulse: "pulse 2s cubic-bezier(0.61,0.14,0.3,0.81) infinite",
    },
    keyframes: {
      pulse: {
        "0%": { opacity: 0.2 },
        "50%": { opacity: 0.4 },
        "100%": { opacity: 0.2 },
      },
    },
    extend: {},
  },
  plugins: [],
};
