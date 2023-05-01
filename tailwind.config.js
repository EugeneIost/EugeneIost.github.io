/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    fontSize: {
      xxs: "12px",
      xs: "13px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "22px",
    },

    colors: {
      white: "#e6f1ff",
      black: "#000000",
      "dark-navy": "#020c1b",
      navy: "#0a192f",
      "light-navy": "#112240",
      "lightest-navy": "#233554",
      slate: "#8892b0",
      "light-slate": "#a8b2d1",
      "dark-slate": "#495670",
      "lightest-slate": "#ccd6f6",
      "main-color": "#48b8a4",
      green: "#64ffda",
    },
  },
  plugins: [],
};
