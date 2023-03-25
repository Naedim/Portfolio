/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors :{
    },
    screens: {
      'sm': '280px',

      'md': '1000px',

      'lg': '1920px',

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
