/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/1000x500.gif')",
        'card' : "url('../public/images/500x500.gif')" ,
      },
      colors: {
        'background': '#15202B',
        'bgcard': '#192734',
        'hover': '#22303C',
        'sc-text': '#8899A6',
      },
    },
  },
  plugins: [],
}