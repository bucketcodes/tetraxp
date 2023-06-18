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
        animation: {
          scroll: 'scroll 40s linear infinite',
        },
        
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
      
    },
    plugins: [],
  }),
  // Add any additional configuration here
};
