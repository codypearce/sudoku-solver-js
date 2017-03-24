const   gulp = require('gulp'),
        eslint = require('gulp-eslint'),
        mocha = require('gulp-mocha');

gulp.task('lint', () => {
    return gulp.src(['**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('test', ['lint'], () => {
    return gulp.src('/test/test.js', {read: false})
        .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['test']);
