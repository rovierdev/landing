/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EF4023',
          900: '#EF4023',
          800: '#F05339',
          700: '#F1664F',
          600: '#F37A65',
          500: '#F58C7B',
          400: '#F69E91',
          300: '#F8B3A6',
          200: '#FAC6BD',
          100: '#FCD9D3',
          50: '#FDECE9',
        },
        secondary: {
          DEFAULT: '#205164',
          900: '#205164',
          800: '#376474',
          700: '#4D7583',
          600: '#638693',
          500: '#7997A2',
          400: '#8EA8B0',
          300: '#A5B9C1',
          200: '#BCCAD0',
          100: '#D2DCE0',
          50: '#E8EDEE',
        }
      },
    }
  },
  plugins: [],
}

