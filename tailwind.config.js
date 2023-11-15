/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      laptop: "1440px",
      desktop: "1536px",
    },
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        clr_primary_100: "hsl(0, 0%, 100%)",
        clr_primary_200: "hsl(0, 0%, 0%)",
        clr_primary_400: "hsl(0, 0%, 55%)",
        clr_primary_500: "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        "hero-img-sm": "url('../images/image-hero-sm.jpg')",
        "hero-img-lg": "url('../images/image-hero-lg.jpg')",
      },
    },
  },
  plugins: [],
};
