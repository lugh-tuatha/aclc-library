/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#6f96e4",
          100: "#8fb4ff",
        },
        secondary: "#ebf1ff",
        accent: "#ff8f94",
        text_color: "#000000",
      },
    },
  },
  plugins: [],
};

