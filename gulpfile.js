var gulp = require('gulp');

gulp.task('default', function() {

  gulp.src('bower_components/bootstrap-sass/assets/stylesheets/**')
      .pipe(gulp.dest('_sass'));

  gulp.src('bower_components/bootstrap-sass/assets/**')
      .pipe(gulp.dest('static'));

  gulp.src('bower_components/jquery/dist/**')
      .pipe(gulp.dest('static/js'));

  gulp.src('bower_components/font-awesome/css/**')
      .pipe(gulp.dest('static/css'));
  gulp.src('bower_components/font-awesome/fonts/**')
      .pipe(gulp.dest('static/fonts'));

});
