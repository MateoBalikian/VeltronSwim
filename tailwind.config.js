/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#2563eb",
          "blue-dark": "#1d4ed8",
          navy: "#1e2d4a",
          purple: "#7c3aed",
        },
      },
    },
  },
  plugins: [],
};
