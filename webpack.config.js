// const path = require('path');
// const webpack = require('webpack');
// const settings = require(path.resolve(__dirname, 'config/settings'));
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // development or production
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/dest/assets/js`,
    filename: "main.js",
    // library: ['com', 'example'],
    // libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
    ],
  },
  target: ['web', 'es5'],
};