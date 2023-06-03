const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = {
  ...withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        neutral: colors.neutral,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      extend: {
        ringWidth: ["hover", "active"],
      },
    },
    plugins: [],
  }),
  // Add any additional configuration here
};
