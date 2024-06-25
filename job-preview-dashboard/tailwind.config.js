/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svg,js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#DC4A2D',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}