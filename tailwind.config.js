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
      body: ["Figtree"],
    },
    extend: {},
  },
  plugins: [],
};
