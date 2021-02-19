const path = require('path');
const resolver = require('postcss-import-resolver');

module.exports = {
  plugins: {
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