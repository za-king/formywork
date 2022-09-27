/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] ,
        'roboto':['Roboto'],
        'play':['Playfair Display'],
        'monserrat':['Montserrat']
      },
      colors: {
        'red-button': 'E01111',
      },
    },
  },
  plugins: [],
}
