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
    extend: {},
  },
  plugins: [],
};
