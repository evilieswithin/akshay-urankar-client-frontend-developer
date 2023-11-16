/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#000',
        light: '#fff',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};
