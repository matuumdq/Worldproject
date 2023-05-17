/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // 50: '#f0f1f1',
          // 100: '#d7d9d9',
          // 200: '#bec1c1',
          // 300: '#a5a9a9',
          // 400: '#8c9191',
          // 500: '#737878',
          // 600: '#5b5f5f',
          // 700: '#434646',
          // 800: '#2b2d2d',
          // 900: '#131414',
          // bg: '#070808'
          bg: '#1c2016'
        },
        secondary: {
          // 50: '#eeecea',
          // 100: '#d8d3cf',
          // 200: '#c2bab4',
          // 300: '#aca299',
          // 400: '#96897e',
          // 500: '#96897e',
          // 600: '#635850',
          // 700: '#48403a',
          // 800: '#2d2824',
          // 900: '#12100e'
          bg: '#f8f7f3'
        },
        other: {
          200: '#003949',
          bg: '#00607b'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
