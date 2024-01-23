/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#FD3D57",
      },
      backgroundImage: {
        "hero-banner": "url('/image/Banner.jpg')",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
