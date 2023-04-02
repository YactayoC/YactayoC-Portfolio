/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { top: "0px", left: "0px" },
          "25%": { top: "0px", left: "200px" },
          "50%": { top: "200px", left: "200px" },
          "75%": { top: "200px", left: "0px" },
          "100%": { top: "0px", left: "0px" },
        },
      },

      animation: {
        "move-icon": "move 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
