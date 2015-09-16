var gulp = require('gulp');
var config = require('./gulp.config')();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function() {
  return gulp.src(config.alljs)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});