/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "320px",
      'sm': "480px",
      'md': "768px",
      'lg': "1000px",
      'xl': "1440px",
      'xxl': "1920px",
    },
    backgroundImage: {
      'catalogbodyxs': "url('/src/img/catalogBody/photo (1).png')",
      'catalogbodysm': "url('/src/img/catalogBody/photo (2).png')",
      'catalogbodymd': "url('/src/img/catalogBody/photo (3).png')",
      'catalogbodylg': "url('/src/img/catalogBody/photo (4).png')",
    },
  },
  plugins: [],
};
