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

// const path = require('path');
// const gulp = require('gulp');
// const rename = require('gulp-rename');
// const ejs = require('gulp-ejs');
// const fs = require('fs-extra');
// // const data = require('gulp-data');
// const replace = require('gulp-replace');
// // const sass = require('gulp-sass');
// // const sassGlob = require("gulp-sass-glob");
// // const postcss = require("gulp-postcss");
// // const autoprefixer = require("autoprefixer");
// // const webpackStream = require('webpack-stream');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config');
// const browserSync = require('browser-sync');
// const plumber = require('gulp-plumber');
// const imagemin = require('gulp-imagemin');
// const mozjpeg = require('imagemin-mozjpeg');
// const pngquant = require('imagemin-pngquant');
// const del = require('del');
//
// function getFileState(path) {
//   try {
//     return fs.statSync(path);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       return null;
//     } else {
//       emit("error", err);
//       return 1;
//     }
//   }
// }
//
// // ファイルパス：コンパイル前
// const srcJsonFiles = './src/json/**/*.json';
// const srcDataJson = './src/json/data.json';
// const srcEjsFiles = './src/ejs/**/*.ejs';
// const srcEjsPartial = '!./src/ejs/**/_*.ejs';
// const srcTailwindFiles = './src/styles/**/*.css';
// const srcTsFiles = './src/ts/**/*.js';
// const srcImgFiles = './src/img/**/*'
// const srcImgFileType = '{jpg,jpeg,png,gif,svg}';
//
//
// // ファイルパス：コンパイル後
// const destDir = './dist/';
// const destFiles = './dist/**/**/*';
// const destHtmlFiles = './dist/*.html';
// const destIndexHtml = 'index.html';
// const destCssDir = './dist/assets/css';
// const destCssFiles = './dist/assets/css/style.css';
// const destJsDir = './dist/assets/js';
// const destJSFiles = './dist/assets/js/*.js';
// const destImtDir = './dist/assets/img';
// const destImgFiles = './dist/assets/img/*';
//
//
// // EJSコンパイル
// const compileEjs = (done) => {
//   const data = JSON.parse(fs.readFileSync(srcDataJson));
//   gulp.src([srcEjsFiles, srcEjsPartial])
//   .pipe(plumber())
//   .pipe(ejs(data))
//   .pipe(ejs({}, {}, {ext: '.html'}))
//   .pipe(rename({extname: '.html'}))
//   .pipe(replace(/^[ \t]*\n/gmi, ''))
//   .pipe(gulp.dest(destDir));
//   done();
// };
//
//
// // tailwind
// // const compileCss = (done) => {
// //   gulp.src(srcTailwindFiles)
// //   .pipe(postcss([
// //     require("tailwindcss"),
// //     // require('postcss-100vh-fix'),
// //     require("autoprefixer"),
// //   ]))
// //   .pipe(gulp.dest(destCssDir));
// //   done();
// // };
//
//
// // TypeScriptをwebpackでバンドル
// // const bundleWebpack = (done) => {
// //   webpackStream(webpackConfig, webpack)
// //   .pipe(gulp.dest(destJsDir));
// //   done();
// // };
//
//
// // リロードするhtml
// const reloadFile = (done) => {
//   browserSync.init({
//     server: {
//       baseDir: destDir,
//       index: destIndexHtml,
//     },
//   });
//   done();
// };
//
//
// // リロード設定
// const reloadBrowser = (done) => {
//   browserSync.reload();
//   done();
// };
//
//
// // 画像圧縮
// const minifyImage = (done) => {
//   gulp.src(srcImgFiles + srcImgFileType)
//   .pipe(imagemin(
//     [
//       pngquant({quality: [0.65, 0.8], speed: 1}),
//       mozjpeg({quality: 80}),
//       imagemin.svgo(),
//       imagemin.gifsicle()
//     ]
//   ))
//   .pipe(gulp.dest(destImtDir));
//   done();
// };
//
//
// // destフォルダのファイル削除
// const clean = (done) => {
//   del([destFiles, '!' + destCssDir, '!' + destJsDir, '!' + destImtDir]);
//   done();
// };
//
//
// // HTMLファイル削除
// const htmlClean = (done) => {
//   del([destHtmlFiles]);
//   done();
// };
//
//
// // 画像ファイル削除
// const imgClean = (done) => {
//   del([destImgFiles]);
//   done();
// };
//
//
// // タスク化
// exports.compileEjs = compileEjs;
// // exports.compileCss = compileCss;
// // exports.bundleWebpack = bundleWebpack;
// exports.reloadFile = reloadFile;
// exports.reloadBrowser = reloadBrowser;
// exports.minifyImage = minifyImage;
// exports.clean = clean;
// exports.htmlClean = htmlClean;
// exports.imgClean = imgClean;
//
//
// // 監視ファイル
// const watchFiles = (done) => {
//   gulp.watch([srcEjsFiles, srcJsonFiles], gulp.series(htmlClean, compileEjs, reloadBrowser));
//   gulp.watch(destHtmlFiles, reloadBrowser);
//   // gulp.watch(srcTailwindFiles, gulp.series(compileCss, reloadBrowser));
//   gulp.watch(destCssFiles, reloadBrowser);
//   // gulp.watch([srcTsFiles, srcJsonFiles], bundleWebpack);
//   gulp.watch(destJSFiles, reloadBrowser);
//   gulp.watch(srcImgFiles, gulp.series(imgClean, minifyImage));
//   gulp.watch(destImgFiles, reloadBrowser);
//   done();
// };
//
//
// // タスク実行
// exports.default = gulp.series(
//   clean, watchFiles, reloadFile, compileEjs, minifyImage
// );