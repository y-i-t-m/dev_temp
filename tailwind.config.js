module.exports = {
  target: ['ie11', {
    objectFit: 'default',
    objectPosition: 'default',
    position: 'default',
  }],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
    content: ["src/ejs/**/*.ejs", "src/js/**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        mainBlack: "#1e1e1e",
        main: "#007F7D",
        topChevron: "#006462",
        limegreen: "#cdefd7",
        grayMain: "#f4f4f4",
        graySub: "#a8a8a8",
        graySub2: "#f6f6f6",
        graySub3: "#ccc",
        red: "#fb3556",
        pinkMain: "#db3076",
        pinkSub: "#f9a6c4",
        yellowMain: "#ffe153",
        yellowSub: "#fff081",
        greenSub: "#aff28b",
        blueSub: "#78dee0",
        purpleSub: "#c8b7d9",
      },
      padding: {
        7: "1.75rem"
      },
      margin: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      zIndex: {
        back: "-1",
      },
      fontSize: {
        tiny: "0.9375rem",
      },
      width: {
        256: "64rem",
        200: "50rem",
      },
      screens: {
        '2xl': '1440px',
      }
    },
  },
  variants: {},
  plugins: [],
}
