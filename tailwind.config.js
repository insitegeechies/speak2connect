/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./public/**/*.{html,js,php}", "./node_modules/preline/dist/*.js"
  ],
  theme: {
    screens: {
      'xs': {
        min: '320px', max:'639px'
      },
      'sm': '640px',
      'sm-only': {
        min: '640px', max: '767px'
      },
      'md': '768px',
      'md-only': {
        min: '768px', max: '1023px'
      },
      'lg': '1024px',
      'lg-only': {
        min: '1024px', max: '1279px'
      },
      'xl': '1280px',
      'xl-only': {
        min: '1280px', max: '1535px'
      },
      '2xl': '1536px',
      'sm-md': {
        min: '640px', max: '1023px'
      },
      'md-lg': {
        min: '1024px', max: '1535px'
      },
      'sm-lg': {
        min: '640px', max: '1279px'
      }
    },
    extend: {
      animation: {
        'spin-once': 'spin 0.5s ease-in-out'
      },
      colors: {
        primary: '#cc313d',
        secondary: '#f7c5cc',
        customPink: {
          50: 'var(--custom-pink-50)',
          100: 'var(--custom-pink-100)',
          200: 'var(--custom-pink-200)',
          300: 'var(--custom-pink-300)',
          400: 'var(--custom-pink-400)',
          500: 'var(--custom-pink-500)',
          600: 'var(--custom-pink-600)',
          700: 'var(--custom-pink-700)',
          800: 'var(--custom-pink-800)',
          900: 'var(--custom-pink-900)',
          950: 'var(--custom-pink-950)',
        },
        flushMahogany: {
          50: 'var(--flush-mahogany-50)',
          100: 'var(--flush-mahogany-100)',
          200: 'var(--flush-mahogany-200)',
          300: 'var(--flush-mahogany-300)',
          400: 'var(--flush-mahogany-400)',
          500: 'var(--flush-mahogany-500)',
          600: 'var(--flush-mahogany-600)',
          700: 'var(--flush-mahogany-700)',
          800: 'var(--flush-mahogany-800)',
          900: 'var(--flush-mahogany-900)',
          950: 'var(--flush-mahogany-950)',
        }
      }
    },
    fontFamily: {
      "raleway":["Raleway", "sans-serif"], "abril-fatface":["Abril Fatface", "serif"], "eb-garamond":["EB Garamond", "serif"], "montserrat":["Montserrat", "sans-serif"]
    }
  },
  plugins: [
      require("daisyui")
  ],
  daisyui: {
    themes: false
  }
}

