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
        },
        roxo: {
          fundo: '#F6F3FF',
          cards: '#EEE8FE', 
          navbar: '#5D5B79',
          botao: '#A384FF',
          claro: '#F7F3FF',
          escuro: '#3F4999',
          hover: '#EB569A'
        }
     
      },
      fontFamily: {
          inter: ['Montserrat',  'sans-serif']
      }
    },
  },
  plugins: [],
}

