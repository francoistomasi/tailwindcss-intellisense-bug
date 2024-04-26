module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/filters.js", // Custom style in filters
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AE2229",
        secondary: "#E5C163",
      },
      screens: {
        stretch: { min: "540px", max: "540px" },
        compact: { min: "768px", max: "768px" },
      },
    },
  },
};