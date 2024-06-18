/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],

  theme: {
    extend: {
      colors: {
        bgPrimary: '#0F1C2E',
        lightGreen: '#5C8374',
        primary: '#acc2ef',
        secondary: '#1f2b3e',
        accent: '#FFEB3B',
        extraLightGreen: '#93B1A6',
        text: '#FFFFFF',
      },
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
