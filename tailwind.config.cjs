/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
         backgroundImage: {
        'spiderman': "url('/public/images/SpidermanBg.png')",
      }
    },
  },
  plugins: [],
}