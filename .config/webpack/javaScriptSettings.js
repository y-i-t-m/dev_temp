const TEST = /\.(tsx?|jsx?)$/;

const JS_LOADER = {
  loader: "babel-loader",
  // Babel のオプションを指定する
  options: {
    "presets": [
      ["@babel/preset-env", {
        "useBuiltIns": "usage",
        "corejs": 3,
        "debug": true
      }]
    ]
  },
}

const JavaScriptSettings = [
  {
    test: TEST,
    exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
    use: [
      JS_LOADER,
    ],
  }
];

module.exports = JavaScriptSettings;