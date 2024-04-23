/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        md: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
    fontFamily: {
      'Inter-bold': 'Inter-bold',
      'Inter-md': 'Inter-md',
      'Inter-li': 'Inter-li',
      'Inter-xli': 'Inter-xli',
      'SpaceMono-bold': 'SpaceMono-bold, Inter',
      'SpaceMono-regular': 'SpaceMono-regular, Inter',
      'Arial-rounded-mt-bold': 'Arial-rounded-mt-bold, Inter',
    },
    boxShadow: {
      'glass-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'xl2': '1440px',
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

