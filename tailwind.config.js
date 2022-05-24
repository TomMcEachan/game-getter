module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bebas': ['"Bebas Neue"', 'sans-serif;'],
       },
       dropShadow: {
        'pop':['4px 4px 0px black']
       },
       spacing: {
        'search':['768px']
       },
    },
  },
  plugins: [],
}