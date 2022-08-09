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
  },
  plugins: [],
};
