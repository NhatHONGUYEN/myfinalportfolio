/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/emails/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
        },
        gray: {
          200: '#e5e7eb',
          700: '#374151',
        },
      },
    },
  },
};
