/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E73980',
        secondary: '#861040',
        tertiary: '#D18000',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-secondary-var': '#DDDDDD',
        'on-tertiary': '#FFFFFF',
        surface: '#FFFFFF',
        'on-surface': '#000000',
        'on-surface-var': '#323232',
        outline: '#646464',
        'outline-var': '#E7E7E7'
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif']
      }
    }
  },
  plugins: []
};
