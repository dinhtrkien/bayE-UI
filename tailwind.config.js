/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    darkMode: false,
    extend: {
      height: {
        200: '64rem',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3B82F6AA",
          neutral: "#9c9c9c"
        }
      }

    ]
  },
  plugins: [daisyui],
};
