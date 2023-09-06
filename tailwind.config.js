/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'before-md': { 'raw': '(min-width: 760px)' },
      },
      fontFamily: { 
        serif: ['var(--font-robotoSlab)'], // class name is font-serif
        sans: ['var(--font-roboto)'],  // class name is font-sans
      },
    },
  },
  plugins: [],
}
