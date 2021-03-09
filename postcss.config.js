const path = require('path');
const resolver = require('postcss-import-resolver');

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
    // "postcss-simple-vars": {},
    "postcss-mixins":{},
    "postcss-object-fit-images": {},
    tailwindcss: {},
    autoprefixer: {},
    // "cssnano": {},
  },
};