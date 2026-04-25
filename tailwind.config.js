/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        cinzelPlain: ['Cinzel', 'serif'],
        crimson: ['"Crimson Text"', 'serif'],
      },
      colors: {
        gold: '#c9a84c',
        'gold-light': '#f0d080',
        'gold-dark': '#8b6914',
        fire: '#e05a00',
      },
    },
  },
  plugins: [],
}
