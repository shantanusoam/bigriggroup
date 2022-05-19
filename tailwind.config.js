module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
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
        heading: '36px',
        subheading: '20px',
        desc: '18px',
      },
      fontWeight: {
        heading: '600',

        'sub-heading': '600',

        desc: '400',
      },

      fontFamily: {
        heading: 'Poppins',

        'sub-heading': 'Poppins',

        desc: 'Poppins',
      },
      colors: {
        yellow: '#FFAB53',
        Heading: '#414141',
        Description: '#5E5B5B',
        Darkblue: '#22334C',
        Lightblue: '#006BC3',
        white: '#F1F1F1',
      },
    },
  },
};
