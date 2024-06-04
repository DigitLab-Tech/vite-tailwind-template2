/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'blue': '#00263d',
      'yellow': '#fcb900',
      'white': '#ffffff'
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'heading': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

