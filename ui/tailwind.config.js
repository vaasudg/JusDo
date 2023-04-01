/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx,}',
    './components/**/*.{js,jsx,ts,tsx,}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#216eae',
          '90': '#240C5C',
          '80': '#191071',
          '70': '#152386',
          '60': '#1B459A',
          '50': '#216EAE',
          '40': '#3D99BB',
          '30': '#59BEC7',
          '20': '#76D3C9',
          '10': '#93DEC8'
        }
      }
    }
  },
  plugins: []
}
