/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      purple: "#250153",
      white: "#FFFFFF",
      gray: "#6d747d",
      black: "#101010",
      green: "#22c55e",
      blue: "#2563eb",
      red: "#891212",
      test: "#a5b4fc",
      home: "#8F7337",
      formulaE: "#4e0b0b",
      escalada: "#88612e"
    },
    extend: {
      boxShadow: {
        'blur': '0 0 23px #ffffff',
        'blur-left': '2px 2px 4px #a5b4fc',
        'blur-green': '0 0 15px #22c55e',
        'blur-blue': '0 0 15px #2563eb',
        'blur-red': '0 0 15px #b91c1c',
      }
    },
  },
  plugins: [],
};
