/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      colors: {
        blue: {
          50: '#edf5ff',
          100: '#daeaff',
          200: '#bcd8ff',
          300: '#8ebeff',
          400: '#599aff',
          500: '#3479ff',
          600: '#1d5fff',
          700: '#114bf5',
          800: '#1440cc',
          900: '#173c9f',
        },
      },
    },
  },
  plugins: [],
};