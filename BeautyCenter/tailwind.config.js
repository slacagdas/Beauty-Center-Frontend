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
        cream: '#f5f5dc', // Krem rengi HEX kodu
        'light-cream': '#fdf5e6', // Daha açık krem rengi
        'dark-cream': '#e0d5d3', // Daha koyu krem rengi
      },
    },
  },
  plugins: [],
}
