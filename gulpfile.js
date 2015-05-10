/**
 * Yggdrasil-frontend
 */

// Common libs
var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-server-livereload');

// Development libs
var ts = require('gulp-typescript');
var sass = require('gulp-sass');

// Deployment libs
var htmlify = require('gulp-angular-htmlify');
var mincss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var usemin = require('gulp-usemin');
var templateCache = require('gulp-angular-templatecache');

// Create typescript project
var tsProject = ts.createProject({
    out: 'yggdrasil.js'
});

gulp.task('dev', function () {

    gulp.src(['src/scss/app.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./src/css'));

    gulp.src('src/templates/*.html')
        .pipe(htmlify())
        .pipe(templateCache('yggdrasil-templates.js', {
            standalone: true
        }))
        .pipe(gulp.dest('./src/js'));

    gulp.src([
        'src/ts/libs/**/*.ts',
        'src/ts/**/*.ts',
        'src/ts/*.ts'
        ])
        .pipe(ts(tsProject))
        .pipe(gulp.dest('./src/js'));

});

gulp.task('srv', function () {

    gulp.src('./src')
        .pipe(server({
            directoryListing: false,
            livereload: false,
            open: false
        }));

});
