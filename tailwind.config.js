/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/js/**/*.js" ],
  theme: {
    screens: {

      'sm' : '360px',

      'md': '500px',

      'lg': '900px',

      'xl': '1050px'

    },

    extend: {
      width: {

      }, 
      height : {
        
      }
    },
    extends : {
  colors : {
    'dark-purple' : '#310D20'
  }
    }
  },
  plugins: [require("tw-elements/plugin.cjs")],
};
