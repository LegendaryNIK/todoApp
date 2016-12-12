var gulp = require('gulp'), 
    sass = require('gulp-sass');
    connect = require('gulp-connect');
    concat = require('gulp-concat')
    replace = require('gulp-replace');

gulp.task('sass', function(){ 
    return gulp.src('src/styles/style.sass') 
        .pipe(sass()) 
        .pipe(gulp.dest('./build/'))
});

gulp.task('server', function() {
    connect.server({
        root: 'build',
        port: 1337
    });
});

gulp.task('scripts', function() {
    return gulp.src(['./src/js/app.js', './src/js/Controllers/testController.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('template', function(){
    gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['sass','scripts','template','server', 'watch']);


gulp.task('watch', function() {
    gulp.watch('src/styles/*.sass', ['sass']);
    gulp.watch('src/index.html', ['template']);
    gulp.watch('src/js/**/*.js',['scripts']);
});

