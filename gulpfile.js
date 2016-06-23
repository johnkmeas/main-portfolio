var gulp = require('gulp');
 
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['styles'], function(){
    gulp.watch('assets/**/*.scss', ['styles']);
});

gulp.task('styles', function () {
 
    gulp.src('assets/sass/style.scss')
 
       .pipe(sass().on('error', sass.logError))
       //.pipe(concat('main.css'))
       
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
        //.pipe(gulp.dest('./dist/css'));
        //.pipe(gulp.dest('style.css'));
   
 
});

