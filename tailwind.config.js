/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rosa: {
          claro: '#fbcfe8',
          escuro: '#be185d',
          hover: '#fb7185',
        }
      },
      fontFamily: {
          inter: ['Inter',  'sans-serif']
      }
    },
  },
  plugins: [],
}

