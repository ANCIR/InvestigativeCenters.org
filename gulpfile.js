var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  gulp.src('bower_components/bootstrap-sass/assets/stylesheets/**')
      .pipe(gulp.dest('_sass'))
});
