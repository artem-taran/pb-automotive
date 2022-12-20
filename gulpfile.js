const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

function html() {
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('./build/'))
}

function css() {
  return gulp.src('./src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function js() {
  return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('build/js/'))
}

function image() {
  return gulp.src('./src/img/*')
    .pipe(gulp.dest('build/img'))
}

function watch_files() {
  browserSync.init({
      server: {
          baseDir: "build/"
      }
  });
  gulp.watch("./src/scss/**/*.scss", css);
  gulp.watch("./src/js/**/*.js", js);
  gulp.watch("./src/**/*.html", html).on("change", browserSync.reload);
  gulp.watch("./src/img/", image);
}

exports.default = gulp.series(html, css, js, image, watch_files);