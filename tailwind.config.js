module.exports = {
  //   content: ["./src/**/*.{html,js}"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
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
        rainbow: {
          "0%, 100%": { color: "#f43f5e" }, // Rose 500
          "17%": { color: "#fb7185" }, // Rose 400
          "34%": { color: "#fda4af" }, // Rose 300
          "50%": { color: "#f9a8d4" }, // Pink 300
          "67%": { color: "#f472b6" }, // Pink 400
          "84%": { color: "#ec4899" }, // Pink 500
          //   "85%": { color: "#f43f5e" }, // Rose 500
        },
        rainbowFlow: {
          "0%": { backgroundPosition: "200% 50%" }, // Start gradient position
          "100%": { backgroundPosition: "0% 50%" }, // End gradient position
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(1deg)" },
          "50%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        rainbow: "rainbow 7s linear infinite", // 5s duration, linear timing, infinite loop
        rainbowFlow: "rainbowFlow 10s linear infinite", // 3s duration, linear timing, infinite loop
        wiggle: "wiggle 1s ease-in-out infinite",
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
