/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],

  theme: {
    extend: {
      colors: {
        bgPrimary: '#040D12',
        darkGreen: '#183D3D',
        lightGreen: '#5C8374',
        extraLightGreen: '#93B1A6',
      },
    },
  },
  plugins: [],
}
