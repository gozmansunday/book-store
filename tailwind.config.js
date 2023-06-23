/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './overhaul/**/*.{js,ts,jsx,tsx,mdx}',
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
        ade: ['var(--font-ade)'],
        clash: ['var(--font-clash)'],
        hubot: ['var(--font-hubot)'],
        mona: ['var(--font-mona)'],
        neue: ['var(--font-neue)'],
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
    },
  },

  plugins: [],
}