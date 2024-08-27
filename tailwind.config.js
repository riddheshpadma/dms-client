/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-color": "#12181E",
        "primary-color":"#27AC1F",
        "secondary-color":"#85FE7F"
      }
    },
  },
  plugins: [],
}

