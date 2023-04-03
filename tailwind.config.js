/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        button: '#3b82f6',
        button_hover: '#4f46e5',
        background: '#101630',
        background_secondary: '#4740bd',
      },
      boxShadow: {
        'icons-project': '0px 0px 0px 2px white',
      },
      keyframes: {
        fadeInTab: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
      },

      animation: {
        'fade-in-tab': 'fadeInTab 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
