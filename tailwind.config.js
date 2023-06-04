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
      }
    },
  },
  plugins: [],
}