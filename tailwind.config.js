/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bigblue: '#1363DF',
        litblue: '#06283D',
      },
      animation: {
        pulse: 'pulse 0.2s ease-in',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
