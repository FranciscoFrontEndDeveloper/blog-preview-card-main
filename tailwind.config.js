/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      Yellow: "hsl(47, 88%, 63%)",
      Grey: "hsl(0, 0%, 50%)",
      White: "hsl(0, 0%, 100%)",
      Black: "hsl(0, 0%, 7%)",
    },
    fontFamily: {
      'Figtree': ["Figtree"],
    },
    gridTemplateRows: {
      "grid-rows-2": "repeat(2,minmax(auto,1fr))",
    },
    boxShadow: {
      'shadow-Black':'10px 10px 0px 0px #121212)'
    },
    borderRadius: {
      'lg':'1.5rem'
    },
    extend: {},
  },
  plugins: [],
};
