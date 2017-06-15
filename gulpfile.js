'use strict';
 
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('server',['sass','babel'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./js/*.js",['babel']);

    gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('sass', function () {   
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
    
   
});

gulp.task('babel',function(){
    return gulp.src("./ytplayer.js")
    .pipe(babel())
    .pipe(gulp.dest("./js/"));
});

gulp.task('default', ['server']);
 


