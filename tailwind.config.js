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
    extend: {
      fontSize: {
        heading: "3rem",
        subheading: "2rem",
        desc: "1.5rem",
        navsmall: "14px",
        navsmallne: "10px;",
        descnew:"19px",
        footerheading:"34px"
      },
      fontWeight: {
        heading: "600",

        "sub-heading": "600",

        desc: "400",
      },

      fontFamily: {
        heading: "Poppins",

        "sub-heading": "Poppins",

        desc: "Poppins",
      },
      colors: {
        yellow: {
          bg: "#FFAB53",
          text: "#fff",
          shadow: "#CE9D6BC2",
          shadowhover: "#FFAF5C",
        },
        Heading: "#414141",
        Description: "#5E5B5B",
        Darkblue: "#22334C",
        Lightblue: "#006BC3",
        whitenew: "#F1F1F1",
        inputborder: "#E0E3EB",
        neautralform: "#292E3D",
        businessbackground: "#F2F2F2", 
      },
      spacing: {
        '30rem':'33rem',
        '10rem':'10rem'
      },
      width:{
        '50wv':'50wv',
        '70vh':'70vh',
        '30rem':'30%', 
        '25rem':'25%'
        
      },
      height:{
        '40rem':'40rem',
        '65vh' : '67vh',
      },
      lineHeight:{
        '44px':'44px'
      }
    },
  }, 
};

