'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('src/template/*.html', ['template']);
	gulp.watch('src/**/*.md', ['template']);
	gulp.watch('src/scripts/*.js', ['javascript']);	
	gulp.watch('src/content/*.*', ['styles']);
	gulp.watch('package.json', ['javascript', 'styles']);	
	gulp.watch('bower.json', ['javascript', 'styles']);	
	gulp.watch('bower.json', ['bower-dependencies']);	
});