/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#2FA5A0",
          dark: "#0B0E11"
        }
      }
    },
  },
  plugins: [],
};
