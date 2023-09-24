/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'homeScreenImg':"require('./assets/HomeScreenBG.png')"
      }
    },
  },
  plugins: [],
}

