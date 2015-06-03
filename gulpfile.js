var gulp = require('gulp');

var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var minifyImage = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyInline = require('gulp-minify-inline');

var bases = {
    source: 'source/',
    dist: 'dist/'
};

gulp.task('clean', function () {
    return gulp.src(bases.dist)
        .pipe(clean());
});

function buildHtml(sources, destination) {
    var assets = useref.assets();
    gulp.src(sources, {cwd: bases.source})
        .pipe(assets)
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulpif('*.html', minifyInline()))
        .pipe(gulpif('*.html', minifyHtml()))
        .pipe(gulp.dest(bases.dist + destination));
}

gulp.task('build', function () {
    buildHtml(['*.html', '!views/**/*.html', '!project-*.html'], '');
    buildHtml(['views/*.html'], 'views/');
});

gulp.task('minifyImage', function () {
    gulp.src(['**/*.png', '**/*.jpg'], {cwd: bases.source})
        .pipe(minifyImage())
        .pipe(gulp.dest(bases.dist));
});

gulp.task('copyFonts', ['clean'], function () {
    gulp.src(['**/*.woff2'], {cwd: bases.source})
        .pipe(gulp.dest(bases.dist));
});

gulp.task('default', ['clean'], function () {
    gulp.start('build', 'minifyImage', 'copyFonts');
});