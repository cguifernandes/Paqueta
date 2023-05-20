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
        orange: {
          100: "#FF8A29",
          200: "#F57002",
          300: "#CF5D00"
        },
        grey: {
          100: '#383838'
        }
      },
      backgroundImage: {
        'banner-hero': 
        "url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/banner-hero.png?raw=true')"
      },
    },
  },
  plugins: [],
}
