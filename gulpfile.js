'use-strict'

const gulp = require('gulp')
const jasmine = require('gulp-jasmine')

gulp.task('test', () =>
    gulp.src('spec/tests/*.js')
        .pipe(jasmine())
)

gulp.task('watch', () => {
  gulp.watch('**/*.js', { debounceDelay: 2000 }, ['test'])
})

gulp.task('default', ['watch'])
