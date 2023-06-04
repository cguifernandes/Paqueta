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
          300: "#CF5D00",
          400: "#b55304"
        },
        grey: {
          100: '#383838',
          500: 'rgba(56, 56, 56, 0.6)',
          800: '#ebebeb'
        },
        
      },
      backgroundImage: {
        'banner-hero': 
        "url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/banner-hero.png?raw=true')",

        'calcados-femininos':
        "url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/calcados-femininos.png?raw=true')",
        'calcados-feminios-shadow':
        "linear-gradient(to left, transparent 40%, rgba(255, 138, 41, 1) 100%)",

        'calcados-masculinos':
        "url('https://github.com/leovargasdev/br-challenges-paqueta-calcados/blob/master/assets/calcados-masculinos.png?raw=true')",
        'calcados-masculinos-shadow':
        "linear-gradient(to right, transparent 40%, rgba(255, 138, 41, 1) 100%)"
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
