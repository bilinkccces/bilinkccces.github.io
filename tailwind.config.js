/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f7ff',
          500: '#0c4da2',
          700: '#0a3f84',
        },
      },
    },
  },
  plugins: [],
}
