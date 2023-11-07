/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}", "./**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'softViolet': 'hsl(277, 64%, 61%)'
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'lexend-deca': ['Lexend Deca', 'sans-serif'],
    },
  },
  plugins: [],
}

