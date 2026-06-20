/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode by class
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0ea5e9', // sky-500
          DEFAULT: '#0284c7', // sky-600
          dark: '#0369a1', // sky-700
        },
        accent: {
          light: '#22d3ee', // cyan-400
          DEFAULT: '#06b6d4', // cyan-500
          dark: '#0891b2', // cyan-600
        },
        background: {
          dark: '#0f172a', // slate-900
          light: '#f8fafc', // slate-50
        },
        surface: {
          dark: '#1e293b', // slate-800
          light: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
