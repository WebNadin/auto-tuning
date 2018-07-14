var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCSS = require('gulp-concat-css'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    concatJS = require('gulp-concat'),
    minCSS = require('gulp-cssnano'),
    minJS = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('gulp-sequence'),
    clean = require('gulp-clean'),
    minIMG = require('gulp-imagemin'),
    jade = require('gulp-jade'),
    /*runSequence = require('run-sequence'),
    hash = require('gulp-hash-filename'),*/
    reload = browserSync.reload,

    src = {
        js: [
            /*'src/js/lib/jquery-1.11.2.min.js',*/
            'src/js/main.js'
        ],
        css: [
            'src/css/main.css',
            /*'src/css/developer.css',*/
            /*'src/css/lib/slick.css',
             'src/css/lib/selectric.css'*/
        ],
        html: '*.html',
        jade: 'src/templates/**/*.jade',
        /*sass: 'src/scss/!*.scss',*/
        img: 'src/img/**/*'
    };

gulp.task('server', function (callback) {
    /*runSequence('sass-reload', 'js-dev', 'move', callback);*/
    runSequence('js-dev', 'move', callback);
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    /*gulp.watch(src.sass, ['sass-reload']);*/
    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.js, ['js-dist']).on('change', reload);
    gulp.watch(src.jade, ['jade']).on('change', reload);
});

gulp.task('move', function () {
    gulp.src('src/css/lib/**/*.css')
        .pipe(gulp.dest('dev/css/'));
    gulp.src('src/js/lib/**/*.js')
        .pipe(gulp.dest('dev/js/'));
});

gulp.task('sass-reload', function (callback) {
    runSequence('clean-css', 'compile-sass', 'reload', callback);
});

gulp.task('clean-dist', function () {
    return gulp.src(['dist/common.min.js', 'dist/common.css'], {read: false})
        .pipe(clean());
});

gulp.task('clean-css', function () {
    return gulp.src('dev/css/common.css', {read: false})
        .pipe(clean());
});

gulp.task('compile-sass', function () {
    return gulp.src(src.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        /*.pipe(sass())*/
        .pipe(prefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dev/css/'));
});

gulp.task('reload', function () {
    reload();
});

gulp.task('styles', function () {
    /*return gulp.src(['dev/css/!**!/!*.css', '!dev/css/main.css'])*/
    return gulp.src(['dev/css/**/*.css'])
        .pipe(concatCSS('common.css'))
        .pipe(minCSS())
        .pipe(rename('common.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('jade', function() {
    return gulp.src(src.jade)
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('dist/'));
});

gulp.task('js-dev', function () {
    return gulp.src(src.js)
        .pipe(plumber())
        .pipe(gulp.dest('dev/js'))
});

gulp.task('js-dist', function () {
    return gulp.src(src.js)
        .pipe(plumber())
        .pipe(concatJS('common.js'))
        .pipe(minJS())
        .pipe(rename('common.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('min-img', function () {
    return gulp.src(src.img)
        .pipe(minIMG())
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({
            message: ' ',
            title: 'IMG done!',
            onLast: true
        }));
});


/// MAIN TASKS ----> ///

gulp.task('dist', function (callback) {
    /*runSequence('clean-dist', 'sass-reload', 'min-img', ['styles', 'js-dist'], callback);*/
    runSequence('clean-dist', 'min-img', ['styles', 'js-dist'], callback);
});

gulp.task('default', function (callback) {
    runSequence('clean-css', 'server', callback);
});







