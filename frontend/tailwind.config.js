/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wow-blue': '#0070DE',
        'wow-gold': '#FFD100',
        'wow-red': '#C41E3A',
        'wow-green': '#00FF00',
        'wow-purple': '#9370DB',
        'wow-orange': '#FF8C00',
      },
      fontFamily: {
        'wow': ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}