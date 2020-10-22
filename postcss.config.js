module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    "postcss-calc",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "postcss-custom-properties",
      {
        preserve: false, // completely reduce all css vars
        importFrom: [
          "./styles/fullcalendar-vars.css", // look here for the new values
        ],
      },
    ],
  ],
};
