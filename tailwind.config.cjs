/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      wave:['wave','san-serif']
    },
    extend: {
      colors: {
        primary:'#00539cff',
        secondary:'#eea47fff',
        tertiary:'#00539cff',
      }
    },
  },
  plugins: [],
}