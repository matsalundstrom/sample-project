var gulp = require('gulp');
var config = require('./gulp.config')();

var plugins = require('gulp-load-plugins')({lazy: true});

gulp.task('lint', function() {
  return gulp.src(config.alljs)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});