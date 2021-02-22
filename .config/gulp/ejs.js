// const path = require('path');
const Settings = require('../settings');
const fs = require('fs-extra');
const gulp = require('gulp');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');

const compileEjs = (done) => {
  const data = JSON.parse(fs.readFileSync(`${Settings.json.src}`));
  gulp.src([`${Settings.ejs.src}`, `${Settings.ejs.partial}`])
  .pipe(plumber())
  .pipe(ejs(data))
  .pipe(ejs({}, {}, {ext: '.html'}))
  .pipe(rename({extname: '.html'}))
  .pipe(replace(/^[ \t]*\n/gmi, ''))
  .pipe(gulp.dest(`${Settings.ejs.dest}`));
  done();
}

module.exports = compileEjs;
