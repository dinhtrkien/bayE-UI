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
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },

    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes').light,
          primary: '#3B82F6AA',
          neutral: '#9c9c9c',
        },
      },
    ],
  },
  plugins: [daisyui],
};
