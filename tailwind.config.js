/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  future: {
    hoverOnlyWhenSupported: true,
  },

  theme: {
    screens: {
      xxs: '324px',
      xs: '356px',
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1800px',
    },

    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        neue: ['Neue Power', 'sans-serif'],
        ade: ['Ade Display', 'serif'],
      },

      colors: {
        'main-dark': '#4338CA',
        'main-mid': '#818CF8',
        'main-light': '#A5B4FC',
        'dark': '#121210',
        'mid': '#262624',
        'light': '#CCCCCE',
      },
    },
  },

  plugins: [],
}