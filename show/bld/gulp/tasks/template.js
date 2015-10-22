var gulp = require('gulp');

gulp.task('slides', function() {
    var concat = require('gulp-concat');
    
   return gulp.src(['src/slidelayout/*.md', 'src/slides/*.md'])
    .pipe(concat('allslides.md'))
    .pipe(gulp.dest('tmp'))
});

gulp.task('template', ['slides'], function () {

    var insert = require('gulp-file-insert'); 

    return gulp.src('src/template/index.html')
        .pipe(insert({
            '<!-- slides -->': 'tmp/allslides.md'
        }))
        .pipe(gulp.dest('dist'));
});