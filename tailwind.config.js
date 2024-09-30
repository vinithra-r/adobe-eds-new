/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './blocks/**/*.{html,js}'],
  options: {
    safelist: ['justify-end', 'items-end'], // Add any dynamic classes here
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
