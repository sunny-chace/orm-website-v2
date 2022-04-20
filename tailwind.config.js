module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      "tablet-gothic": ["tablet-gothic"],
      "minerva-modern": ["minvera-modern"],
      "roboto": ["roboto"],
    },
    extend: {
      colors: {
        badge: {
          success: "#2D9D78",
          pending: "#E68619",
          error: "#E34850",
          buy: "#407BFF",
          sell: "#7F45FF",
        },
        neutral: {
          50: "#F5F7FC",
          100: "#DDDFE4",
          200: "#C4C6CD",
          300: "#ACAEB5",
          400: "#94959E",
          500: "#7B7D86",
          600: "#63646F",
          700: "#4B4C57",
          750: "#3F404C",
          800: "#323340",
          850: "#262734",
          900: "#1A1B28",
          1000: "#39B990"
        },
        error: {
          50: "#E34850",
        },
      },
    },
    fontSize: {
      12: ['0.75rem', {
        lineHeight: '150%',
        letterSpacing: '0rem',
      }],
      14: ['0.875rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      16: ['1rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      21: ['1.3125rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      24: ['1.5rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      28: ['1.75rem', {
        lineHeight: '140%',
        letterSpacing: '0rem'
      }],
      38: ['2.375rem', {
        lineHeight: '130%',
        letterSpacing: '0rem'
      }],
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      borderColor: ['responsive', 'hover']
    },
  },
  plugins: [],
};