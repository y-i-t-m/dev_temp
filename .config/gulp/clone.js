const path = require('path');
const fs = require('fs-extra');
const timeLog = require('./log');
const gulp = require('gulp');
const setting = require(path.resolve(__dirname, '../settings'));
const through = require('through2');
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function getFileStat(path) {
  try {
    return fs.statSync(path);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return null;
    } else {
      emit('error', err);
      return 1;
    }
  }
}

const clone = (done) => {
  setting.clones.forEach((item) => {
    gulp.src(item.from)
    .pipe(
      through.obj((file, enc, callback) => {
        const srcFileName = file.path.replace(path.join(__dirname, `../../`), '');
        const t = new RegExp(item.from.replace(/\/(!?\*).+$/, ''));
        const name = srcFileName.replace(t, '').replace(/^\//, '');
        const distFileName = `${item.to}${name}`;
        const srcFileStat = file.stat;
        const distFileStat = getFileStat(distFileName);
        const formatSrcFileTime = dayjs(srcFileStat.mtime).format();
        const formatDistFileTime = distFileStat ? dayjs(distFileStat.mtime).format() : undefined;

        const from = file.path.replace(path.join(__dirname, '../../'), '');
        const to = `${item.to}${name}`;
        if (distFileStat && dayjs(formatSrcFileTime).isBefore(formatDistFileTime)) {
          file = null;
        } else {
          timeLog(from, to, name);
          file.stat.mtime = new Date();
        }
        callback(null, file);
      })
    )
    .pipe(gulp.dest(item.to))
  })
  done();
}
module.exports = clone;