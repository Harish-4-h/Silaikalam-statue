/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0a0a0c',
          900: '#111215',
          850: '#16171c',
          800: '#1c1e24',
          700: '#282a33',
          600: '#3a3d4a',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E8DFD0',
          300: '#D6C8B2',
          400: '#BDB09A',
          500: '#9E927E',
        },
        gold: {
          300: '#F5DC88',
          400: '#E4C563',
          500: '#C5A059',
          600: '#AD8642',
          700: '#8C672B',
        },
        bronze: {
          400: '#D9824B',
          500: '#BF6630',
          600: '#9C4E20',
        },
        stone: {
          100: '#ECE8E1',
          200: '#DDD7CD',
          300: '#C5BEB2',
          800: '#2A2927',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'sculpture': '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(197, 160, 89, 0.15)',
        'sculpture-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(197, 160, 89, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.2)',
      },
      backgroundImage: {
        'stone-gradient': 'radial-gradient(ellipse at top, #1c1e24 0%, #111215 50%, #0a0a0c 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #C5A059 0%, #F5DC88 50%, #AD8642 100%)',
      }
    },
  },
  plugins: [],
}
