const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["sans"] = [
  "Ubuntu Condensed",
  "system-ui",
  // <-- you may provide more font fallbacks here
];
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily,
    extend: {},
  },
  variants: {},
  plugins: [],
  darkMode: "class",
};
