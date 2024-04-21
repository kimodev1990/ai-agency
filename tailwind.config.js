/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        bgGreen: "#21382C",
        bgButton: "#1F63CD",
        bgwhite: "#FFFFFF",
        bgoffwhite: "#ECEEF2",
        bgheader: "rgb(22 163 74)",
      },
      fontFamily: {
        lovelace: ["lovelace", "sans-serif"],
      },
    },
  },
  plugins: [],
};
