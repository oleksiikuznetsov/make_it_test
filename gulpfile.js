    const gulp         = require('gulp'),
          sass         = require('gulp-sass'),
          autoprefixer = require('gulp-autoprefixer');

    // gulp.task sass

    gulp.task('sass', () => {
        return gulp.src('app/sass/index.sass', gulp.series('sass'))
            .pipe(sass())
            .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 7', 'ie 8'], {cascade: true}))
            .pipe(gulp.dest('app/css'))
    });

    // gulp.task watch (all changes will automatically be overwritten)
    
    gulp.task('watch', () => {
        gulp.watch('app/sass/index.sass', gulp.series('sass'))
    });

    // before start to work u should write this gulp command 'gulp-start' in your console

    gulp.task('start', gulp.parallel('watch', 'sass'));