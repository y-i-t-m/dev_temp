const path = require('path');
const webpack = require('webpack');
const settings = require(path.resolve(__dirname, '.config/settings'));
// const TerserPlugin = require('terser-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const JavaScriptSettings = require(path.resolve(__dirname, '.config/webpack/javaScriptSettings'));
const cssSettings = require(path.resolve(__dirname, '.config/webpack/cssSettings'));

module.exports = () => {
  console.log(`CURRENT MODE -> ${process.env.NODE_ENV}`);
  const MODE = process.env.NODE_ENV;
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';
  return {
    mode: MODE,
    entry: settings.webpack.entries,
    output: {
      filename: '[name].js',
      path: path.join(__dirname),
    },
    resolve: {
      extensions: ['.js', '.css'],
      alias: {
        'src': path.resolve('./src'),
      },
    },
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : false,
    target: ['web', 'es5'],
    module: {

      rules: [...JavaScriptSettings, ...cssSettings],
    },
    plugins: [
      ...[
        new webpack.ProgressPlugin(),
        // new ForkTsCheckerWebpackPlugin(),
        new FixStyleOnlyEntriesPlugin(),
        new StyleLintPlugin({
          configFile: path.resolve('.config/.stylelintrc.js'),
          fix: true,
        }),
        new ExtractCssChunks({
          filename: '[name].css',
          chunkFilename: '[id].css',
          orderWarning: true,
        }),
      ]
    ],
  }

}
// module.exports = {
//   mode: 'production', // development or production
//   entry: './src/js/main.js',
//   output: {
//     path: `${__dirname}/dest/assets/js`,
//     filename: "main.js",
//     // library: ['com', 'example'],
//     // libraryTarget: 'umd'
//   },
//   optimization: {
//     minimizer: [new TerserPlugin()],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
//         use: [
//           {
//             // Babel を利用する
//             loader: "babel-loader",
//             // Babel のオプションを指定する
//             options: {
//               presets: [
//                 // プリセットを指定することで、ES2020 を ES5 に変換
//                 "@babel/preset-env",
//                 {
//                   "useBuildIns": "usage",
//                   "corejs": 3
//                 }
//               ],
//             },
//           },
//         ],
//       },
//     ],
//   },
//   target: ['web', 'es5'],
// };