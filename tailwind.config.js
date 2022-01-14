const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#1A2238',
      sblack: '#101010',
      sorange: '#FF6A3D',
      white: colors.white,
    },
    extend: {},
  },
  plugins: [],
};
