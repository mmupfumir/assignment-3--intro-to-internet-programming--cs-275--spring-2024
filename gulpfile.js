const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();
const del = require('del');

gulp.task('dev:css', () => {
  return gulp.src('styles/**/*.css')
    .pipe(stylelint({
      configFile: '.stylelintrc.json',
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(browserSync.stream());
});

gulp.task('dev:js', () => {
  return gulp.src('scripts/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(browserSync.stream());
});

gulp.task('dev:browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('styles/**/*.css', gulp.series('dev:css'));
  gulp.watch('scripts/**/*.js', gulp.series('dev:js'));
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('dev:css', 'dev:js', 'dev:browser-sync'));

gulp.task('prod:clean', () => {
  return del(['prod']);
});

gulp.task('prod:css', () => {
  return gulp.src('styles/**/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('prod/styles'));
});

gulp.task('prod:js', () => {
  return gulp.src('scripts/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('prod/scripts'));
});

gulp.task('prod:copy-html', () => {
  return gulp.src('*.html')
    .pipe(gulp.dest('prod'));
});

gulp.task('prod:build', gulp.series(
  'prod:clean',
  gulp.parallel('prod:css', 'prod:js', 'prod:copy-html')
));

gulp.task('build', gulp.series('prod:build'));
