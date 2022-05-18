module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      "yellow": "#FFAB53",
      "Heading": "#414141",
      "Description": "#5E5B5B",
      "Darkblue": "#22334C",
      "Lightblue": "#006BC3",
      "white": "#F1F1F1",
    },
  },
};
  
