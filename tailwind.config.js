const flowbite = require("flowbite-react/tailwind");
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
      fontFamily: {
          sans: ["Figtree", ...defaultTheme.fontFamily.sans],
          midnight: ['"Midnight"', ...defaultTheme.fontFamily.sans],

      },
      scale: {
          '70': '.70',
      },
      colors:{
          primary: '#9E0B26',
          secondary: '#C9C4C0',
          'black-80': 'rgba(0, 0, 0, 0.8)', // Color negro con opacidad al 40%
          'black-40': 'rgba(0, 0, 0, 0.6)', // Color negro con opacidad al 40%
          "black-25": 'rgba(0, 0, 0, 0.25)',


      },
      backgroundImage: {
          'concrete-50': "url('/src/assets/images/bg/concrete-50.png')",
          'manto': "url('/src/assets/images/bg/fondo_manto.png')",
          'textura': "url('/src/assets/images/bg/textura.png')",
          'fondo-limatambo': "url('/src/assets/images/bg/bg-fondo-limatambo.png')",

      },
    
  },
  plugins: [
    flowbite.plugin(),

  ],
}