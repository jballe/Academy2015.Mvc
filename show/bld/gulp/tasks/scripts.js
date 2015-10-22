'use strict';

var gulp = require('gulp');

gulp.task('javascript', function() {
	
	var concat = require('gulp-concat');
	var bower = require('main-bower-files');
	
	//var browserify = require('browserify');
	//var source = require('vinyl-source-stream');
	//var buffer = require('vinyl-buffer');
	//var uglify = require('gulp-uglify');
	var sourcemaps = require('gulp-sourcemaps');

	//var b = browserify({
	//	entries: 'src/scripts/main.js',
	//	debug: true
	//});
	
	//return b.bundle()
	//	.pipe(source('app.js'))
	//	.pipe(buffer())
	
	var files = bower('**/*.js');
	files.push('src/scripts/main.js');
	
	return gulp.src(files)
		.pipe(sourcemaps.init())
		// do stuff
		.pipe(concat('app.js'))
		//.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('reveal-plugins', function() {
	return gulp.src([
			'bower_components/reveal.js/plugin/**/*.js'
	])
	.pipe(gulp.dest('./dist/reveal-plugins'));
});