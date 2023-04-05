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
        background_primary: '#101630',
        background_secondary: '#16204c',
      },
      boxShadow: {
        'icons-project': '0px 0px 0px 2px white',
      },
      keyframes: {
        fadeInTab: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        glowingButton: {
          '0%': { 'background-position': '0 0' },
          '50%': { 'background-position': '400% 0' },
          '100%': { 'background-position': '0 0' },
        },
      },

      animation: {
        'fade-in-tab': 'fadeInTab 0.3s ease-in-out',
        'glowing-button': 'glowingButton 50s linear infinite',
      },
    },
  },
  plugins: [],
};
