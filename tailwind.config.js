/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        'footerPurple': '#F7C9C9',
        'ourRed': '#FE0000',
        'vidGray': '#D9D9D9',
        'ourBlack': '#1A1A1A',
      },
    },
  },
  plugins: [],
}

