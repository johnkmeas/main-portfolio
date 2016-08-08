var gulp = require('gulp');
 
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['styles', 'combinecss','scripts', 'jquery'], function(){
    gulp.watch('assets/**/*.scss', ['styles']);
    gulp.watch('dist/style.css', ['combinecss']);
    gulp.watch('js/**/*.js', ['scripts', 'jquery']);

});

gulp.task('styles', function () {
 
    gulp.src('assets/sass/style.scss')
 
       .pipe(sass().on('error', sass.logError))
       //.pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
        //.pipe(gulp.dest('./dist/css'));
        //.pipe(gulp.dest('style.css'));
 
});
gulp.task('combinecss', function () {
 
    gulp.src(['dist/jquery-ui.min.css', 'dist/jquery-ui.structure.min.css', 
        'dist/jquery-ui.theme.min.css', 'dist/style.css'])
        .pipe(concat('all.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/'));
        //.pipe(gulp.dest('./dist/css'));
        //.pipe(gulp.dest('style.css'));
 
});

gulp.task('jquery', function(){
    gulp.src(['js/jquery.easing.1.3.js','js/jquery-ui.min.js'])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', function(){
    gulp.src('js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

