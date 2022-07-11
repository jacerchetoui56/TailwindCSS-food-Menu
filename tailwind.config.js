/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883"
        }
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
