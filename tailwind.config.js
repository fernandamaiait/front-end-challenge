/** @type {import('tailwindcss').Config} */
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
        'on-tertiary': '#FFFFFF',
        surface: '#FFFFFF',
        'on-surface': '#000000',
        'on-surface-var': '#323232',
        outline: '#646464'
       
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        'archivo-narrow': ['Archivo Narrow', 'sans-serif']
      }
    }
  },
  plugins: [],
}

