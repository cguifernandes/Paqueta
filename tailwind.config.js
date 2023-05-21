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
          100: '#383838',
          800: '#ebebeb'
        },
        
      },
      backgroundImage: {
        'banner-hero': 
        "url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/banner-hero.png?raw=true')",
        'calcados-femininos':
        "linear-gradient(to left, transparent 40%, rgba(255, 138, 41, 1) 100%), url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/calcados-femininos.png?raw=true')",
        'calcados-masculinos':
        "linear-gradient(to right, transparent 40%, rgba(255, 138, 41, 1) 100%), url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/calcados-masculinos.png?raw=true')"
      },
    },
  },
  plugins: [],
}
