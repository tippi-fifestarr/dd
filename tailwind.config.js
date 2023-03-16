/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gorditas: ["var(--font-gorditas)"],
        oswald: ["var(--font-oswald"],
        frijole: ["var(--font-frijole)"],
        islandMoments: ["var(--font-island-moments)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
