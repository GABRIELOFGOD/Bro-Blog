import { themes } from './utils/theme'


let yes = themes[1]


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'secondary': yes.secondary,
        'primary': yes.primary,
        'body': yes.body,
        'gray': yes.gray,
        'darker': yes.darker
      },
    },
  },
  plugins: [],
}

