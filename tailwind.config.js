/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '280px',

      'sm': '552px',

      'md': '800px',


      'lg': '1025px',

    },

    extend: {
      width: {

      }, 
      height : {
        
      }
    },
    
  },
  plugins: [],
};
