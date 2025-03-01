// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#f5f5dc',
          DEFAULT: '#d5bdaf',
          dark: '#a99483',
        },
        nude: {
          light: '#f5e8e6', 
          DEFAULT: '#e2cfc4', 
          dark: '#c2b1a0', 
          peach: '#ffe5b4', 
          blush: '#deafc5', 
          'pinkish-nude': '#d1a3a4', 
          'beige-nude': '#d3b7a6', 
          'taupe-nude': '#b6a19e', 
        },
        salmon: {
          light: '#ffa07a',
          DEFAULT: '#fa8072',
          dark: '#e9967a',
        },
        cream: {
          light: '#fdf5e6',
          DEFAULT: '#f5f5dc',
          dark: '#e0d5d3',
        },
      },
    },
  },
  plugins: [],
}
