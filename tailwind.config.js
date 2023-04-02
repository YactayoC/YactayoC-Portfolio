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
    extend: {
      colors: {
        button: '#3b82f6',
        button_hover: '#4f46e5',
      },
      keyframes: {
        move: {
          '0%': { top: '0px', left: '0px' },
          '25%': { top: '0px', left: '200px' },
          '50%': { top: '200px', left: '200px' },
          '75%': { top: '200px', left: '0px' },
          '100%': { top: '0px', left: '0px' },
        },

        fadeInTab: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
      },

      animation: {
        'move-icon': 'move 5s ease-in-out infinite',
        'fade-in-tab': 'fadeInTab 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
