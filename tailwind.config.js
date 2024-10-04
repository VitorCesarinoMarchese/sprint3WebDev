/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      purple: "#250153",
      white: "#FFFFFF",
      black: "#101010"
    },
    extend: {
      boxShadow: {
        'blur': '0 0 23px #ffffff'
      }
    },
  },
  plugins: [],
};
