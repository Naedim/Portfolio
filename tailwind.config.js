/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {

      'md': '500px',

      'lg': '900px',

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
