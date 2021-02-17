const path = require('path');
const settings = require(path.resolve(__dirname, '../settings'));
const del = require('del');

const clean = (done) => {
  const DEVELOPMENT = process.env.NODE_ENV === 'development';
  const PRODUCTION = process.env.NODE_ENV === 'production';
  const START = process.env.MODE === 'start';
  const BUILD = process.env.MODE === 'build';

  const start = DEVELOPMENT && START;
  const startPro = PRODUCTION && START;
  const build = PRODUCTION && BUILD;
  const buildDev = DEVELOPMENT && BUILD;

  const delPatterns = ['.cache/'];
  //start OR start-pro
  if (start || startPro) {
    console.log('start & start-pro');
    const productionDelItems = [''];
    productionDelItems.forEach((item) => {
      delPatterns.push(item);
    });
  }

  //build OR build-dev
  if (build || buildDev) {
    console.log('build & build dev');
    const productionDelItems = [settings.DIST_PATH];
    productionDelItems.forEach((item) => {
      delPatterns.push(item);
    });
  }

  del(delPatterns, done());
};

module.exports = clean;
