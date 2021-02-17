const DIST_PATH = `./dist/`;

const settings = {
  DIST_PATH,
  js: {
    src: 'src/js/',
    dest: 'assets/js',
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
