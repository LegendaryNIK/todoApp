var gulp = require('gulp'), 
    sass = require('gulp-sass');
    connect = require('gulp-connect');


gulp.task('sass', function(){ 
    return gulp.src('src/styles/style.sass') 
        .pipe(sass()) 
        .pipe(gulp.dest('src/styles'))
});

gulp.task('server', function() {
    connect.server({
        root: 'src',
        port: 1337
    });
});


gulp.task('default', ['sass','server', 'watch']);


gulp.task('watch', function() {
    gulp.watch('src/styles/*.sass', ['sass']);
});

