/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "node_modules/preline/dist/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    container: {
      screens: {
        '2xl': '1290px',
      },
    },

    extend: {
      fontSize: {
        '32x': '32px',
        '40x': '40px',
        '64x': '64px',
      },
      colors: {
        'w-900': '#FFFFFF',
        'gray-950': '#0A0A0B',
        'gray-700': '#4E5055',
        'gray-300': '#AEB0B7',
        'gray-50': '#F5F5F6',
        'gray-100': '#E5E6E8',
        'primary-blue': '#234EFB',

        'border-w': 'rgba(10, 10, 11, 0.24)',
      },
      backgroundImage: () => ({
        'gd-primary':
          'radial-gradient(212.13% 424.26% at 150% 100%, #39FA23 4%, #234EFA 96.24%)',
        // rifat

        // rifat
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
