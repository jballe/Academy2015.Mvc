'use strict';

var gulp = require('gulp');

gulp.task('javascript', function() {
	
	var concat = require('gulp-concat');
	var bower = require('main-bower-files');
	var sourcemaps = require('gulp-sourcemaps');

	var files = bower('**/*.js');
	files.push('node_modules/nomnoml/dist/nomnoml.js');
	files.push('src/scripts/main.js');
	
	return gulp.src(files)
		.pipe(sourcemaps.init())
		// do stuff
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('reveal-plugins', function() {
	return gulp.src([
			'bower_components/reveal.js/plugin/**/*.js',
			'src/scripts/reveal-plugins/**/*.js'
	])
	.pipe(gulp.dest('./dist/reveal-plugins'));
});