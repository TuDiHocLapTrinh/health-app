module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ha-dark-600': '#2E2E2E',
        'ha-dark-500': '#414141',
        'ha-gray-400': '#777777',
        'ha-gray-500': '#2E2E2E',
        'ha-primary-300': '#FFCC21',
        'ha-primary-400': '#FF963C',
        'ha-primary-500': '#EA6C00',
        'ha-primary-340': 'linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)',
        'ha-secondary-300': '#8FE9D0',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  darkMode: 'class',
};
