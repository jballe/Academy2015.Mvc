var gulp = require('gulp');

gulp.task('images', function() {
    
   return gulp.src(['src/slides/images/**/*.*'])
    .pipe(gulp.dest('dist/images'))
});

