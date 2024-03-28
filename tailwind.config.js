/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"

  ],
  theme: {
    extend: {
      fontFamily: {
        thin: 'light',
        semiBold: 'semiBold',
        regular: 'regular', 
        black:'black'
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}

