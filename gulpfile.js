const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');

gulp.task('sass', function () {
  return gulp.src('./app/public/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({browsers: ['last 1 version']})
    ]))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('js', function(){
  return gulp.src('./app/public/scripts/[^_]*.js')
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch', function () {
  gulp.watch('./app/public/styles/*.scss', ['sass']);
  gulp.watch('./app/public/scripts/*.js', ['js']);
});

gulp.task('build', ['sass', 'js'])
gulp.task('dev', ['build', 'watch'])
gulp.task('default', ['dev']);
