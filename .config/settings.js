const DIST_PATH = `./dist/`;

const settings = {
  DIST_PATH,
  js: {
    src: 'src/js/',
    dest: 'assets/js',
  },
  json: {
    src: 'src/json/data.json'
  },
  ejs: {
    src: './src/ejs/**/*.ejs',
    partial: '!./src/ejs/**/_*.ejs',
    dest: DIST_PATH
  },
  img: {
    src: "src/img/",
    dest: "./dist/assets/img/",
  },
  clones: [
    {
      from: 'src/*.html',
      to: DIST_PATH,
    }
  ],
  webpack: {
    entries: {
      [DIST_PATH + 'assets/js/main']: './src/js/main',
      [DIST_PATH + 'assets/css/common']: './src/styles/common',
      [DIST_PATH + 'assets/css/utilities']: './src/styles/utilities',
    },
  }
};

module.exports = settings;
