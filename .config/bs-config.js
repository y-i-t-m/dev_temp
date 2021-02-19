const path = require('path');
const settings = require(path.resolve(__dirname, './settings'));

const BROWSER_SYNC = {
  files: [
    `${settings.DIST_PATH}assets/**/*`,
    `${settings.DIST_PATH}**/*.html`,
    `${settings.DIST_PATH}**/*.php`
  ],
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: false
  },
  // open: 'external',
  server: {
    baseDir: settings.DIST_PATH,
    middleware: [],
    // proxy: 'http://127.0.0.1:9999/',
  },
  logFileChanges: false
};

module.exports = BROWSER_SYNC;