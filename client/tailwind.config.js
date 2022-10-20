/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'disappear': 'fadeout 3s linear forwards'
      },
      keyframes: {
        fadeout: {
          '0%, 66%': { opacity: '1' },
          '99%': { 
            opacity: '0',
            width: 'inherit',
            height: 'inherit',
           },
          '100%': { 
            opacity: '0',
            width: '0',
            height: '0',
            display: 'none',
            visibility: 'hidden',
          },
        },
      }
    },
  },
  plugins: [],
}
