/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors : {
      primary : 'slate-9',
      secondary : colors.white,
      accent : 'violet-6',
      'accent-2' : 'lime-4',
      neutral : 'slate-6'
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
