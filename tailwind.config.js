const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        orange: colors.orange,
        brand: "#F6AD55",
      },
      fontSize: {
        mobile: "42px",
      },
      fontFamily: {
        proxima: ["proxima-nova"],
        roboto: ["Roboto"],
        inter: ["Inter"],
        logo: ["Leckerli One"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["@tailwindcss/forms"],
}
