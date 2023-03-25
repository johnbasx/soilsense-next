/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f9ec',
          100: '#e2f0d7',
          200: '#c7e3b3',
          300: '#a4d086',
          400: '#7db856',
          500: '#66a141',
          600: '#4e7f31',
          700: '#3c6229',
          800: '#344f25',
          900: '#2e4423',
        },
        secondary: {
          50: '#f6f4f0',
          100: '#e9e3d8',
          200: '#d6c7b2',
          300: '#bea686',
          400: '#aa8965',
          500: '#9b7857',
          600: '#856249',
          700: '#6b4b3d',
          800: '#593f36',
          900: '#503933',
        },
      },
      fontSize: {
        '2xs': ['0.7rem', { lineHeight: '0.5rem' }],
        '3xs': ['0.65rem', { lineHeight: '0.5rem' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },

      backgroundImage: {
        'green-land': "url('/public/assets/images/green-land.jpg')",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
