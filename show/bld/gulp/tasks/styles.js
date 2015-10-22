'use strict';

var gulp = require('gulp');

gulp.task('styles', function() {
	var concat = require('gulp-concat');
	
	return gulp.src([
		'bower_components/reveal.js/css/reveal.css',
		'bower_components/reveal.js/css/theme/black.css',
		'src/content/highlight/theme.css',
		'src/content/styles.css'
	])
	.pipe(concat('styles.css'))
	.pipe(gulp.dest('dist'));
});