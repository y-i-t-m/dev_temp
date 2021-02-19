const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const POSTCSS_LOADER = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  }
};

const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    url: false,
    sourceMap: true,
  },
};

const cssCompileSettings = [
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: ExtractCssChunks.loader
      },
      CSS_LOADER,
      POSTCSS_LOADER,
    ],
  },
];

module.exports = cssCompileSettings;