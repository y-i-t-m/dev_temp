const path = require('path');
const resolver = require('postcss-import-resolver');
// const objectFitImages = require('postcss-object-fit-images');

module.exports = {
  plugins: {
    // objectFitImages,
    'postcss-import': {
      resolve: resolver({
        alias: {
          'src': path.resolve('./src'),
        },
      }),
    },
    "postcss-nested": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};