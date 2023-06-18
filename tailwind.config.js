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
        'primary': '#008753',
      },

      keyframes: {
        marquee: {
          '100%': { transform: 'translate(-100%, 0)' }
        },
      },

      animation: {
        marquee: 'marquee 5s linear infinite',
      },

      backgroundImage: {
        'tfa': "url(/assets/images/things-fall-apart.jpg)",
        'americanah': "url(/assets/images/americanah.jpg)",
        'akata': "url(/assets/images/akata-witch.jpg)",
      }
    },
  },

  plugins: [],
}