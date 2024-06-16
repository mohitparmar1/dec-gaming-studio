/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        "img" : "url('./src/assets/gaming-2.jpg')",
      }
    },
  },
  plugins: [],
};
