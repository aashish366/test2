/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#4083f3'
      },
      fontFamily:{
        'display':['poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

