import gulp           from 'gulp';
import gulpCleanCss   from 'gulp-clean-css';
import gulpRename     from 'gulp-rename';
import gulpSass       from 'gulp-sass';
import gulpSourcemaps from 'gulp-sourcemaps';

gulp.task('css', () => {
  return gulp.src('minireset.sass')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('.'));
})

gulp.task('css:min', () => {
  return gulp.src('minireset.sass')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass())
    .pipe(gulpCleanCss())
    .pipe(gulpRename({
      suffix: '.min'
    }))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('.'));
})

gulp.task('watch', () => {
  gulp.watch('minireset.sass', ['css', 'css:min']);
});

gulp.task('default', [
  'css',
  'css:min',
  'watch'
]);

gulp.task('build', [
  'css',
  'css:min'
]);
