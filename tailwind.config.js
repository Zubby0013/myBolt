/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        S320: { max: "320px" },
        S425: { max: "425px" },
        S768: { max: "768px" },
        S1024: { max: "1024px" },
        S1440: { max: "1440px" },
        S2560: { max: "2560px" },
      },
    },
  },
  plugins: [],
};
