/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darknightblue: '#16213E',
        bluerose: '#1A1A2E',
        blueberry: '#3e4491',
        lightazure: '#3e4491',
        mango: '#f7a400',
        guidepink: '#E94560',
      },
      animation: {
        pulse: 'pulse 0.2s ease-in',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
