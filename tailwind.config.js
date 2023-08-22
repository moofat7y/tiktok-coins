const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#faf5ff",
          100: "#e9d8fd",
          200: "#d6bcfa",
          300: "#b794f4",
          400: "#9f7aea",
          500: "#805ad5",
          600: "#6b46c1",
          700: "#553c9a",
          800: "#44337a",
          900: "#322659",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
});
