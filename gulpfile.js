const Settings = require('./.config/settings');
const clean = require('./.config/gulp/clean');
const clone = require('./.config/gulp/clone');
const image = require('./.config/gulp/image');
const compileEjs = require('./.config/gulp/ejs');
const gulp = require('gulp');

exports.clean = clean;
exports.clone = clone;
exports.image = image;
exports.compileEjs = compileEjs;

exports.watch = () => {
  gulp.watch([`${Settings.ejs.src}`, `${Settings.json.src}`], compileEjs);
};