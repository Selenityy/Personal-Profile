module.exports = {
  //   content: ["./src/**/*.{html,js}"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "250px",
        xs: "375px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(1deg)" },
          "50%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        zoom: "ease-in-out",
      },
      colors: {
        whisper: "#EEEEEE",
        goth: "#101010",
      },
    },
    variants: {
      extend: {
        animation: ["hover"],
      },
    },
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  darkMode: "class",
  plugins: [],
};
