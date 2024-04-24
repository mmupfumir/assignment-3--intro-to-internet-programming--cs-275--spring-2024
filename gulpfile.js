const gulp = require(`gulp`);
const babel = require(`gulp-babel`);
const concat = require(`gulp-concat`);
const cleanCSS = require(`gulp-clean-css`);
const eslint = require(`gulp-eslint`);
const stylelint = require(`gulp-stylelint`);
const browserSync = require(`browser-sync`).create();

// Development tasks
gulp.task(`lint-js`,() => {
    return gulp.src(`scripts/*.js`)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task(`lint-css`, () => {
    return gulp.src(`styles/*.css`)
        .pipe(stylelint({
            reporters: [
                { formatter: `string`, console: true }
            ]
        }));
});

gulp.task(`transpile.js`, () => {
    return gulp.src(`scripts/*.js`)
        .pipe(babel({
            presets: [`@babel/env`]
        }))
        .pipe(concat(`main.js`))
        .pipe(gulp.dest(`dist`))
        .pipe(browserSync.stream());
});

gulp.task(`minify-css`, () => {
    return gulp.src(`styles/*.css`)
        .pipe(cleanCSS())
        .pipe(concat(`main.css`))
        .pipe(gulp.dest(`dist`))
        .pipe(browserSync.stream());
});

gulp.task(`watch`, () => {
    browserSync.init({
        server: {
            baseDir: `./`
        }
    });

    gulp.watch(`scripts/*.js`, gulp.series(`lint-js`, `transpile-js`));
    gulp.watch(`styles/*.css`, gulp.series(`lint-css`, `minify-css`));
    gulp.watch(`index.html`).on(`change`, browserSync.reload);
});

gulp.task(`dev`, gulp.parallel(`watch`));

// Production tasks
gulp.task(`build-js`, () => {
    return gulp.src(`scripts/*.js`)
        .pipe(babel({
            presets: [`@babel/env`]
        }))
        .pipe(concat(`main.js`))
        .pipe(gulp.dest(`prod/scripts`));
});

gulp.task(`build-css`, () => {
    return gulp.src(`styles/*.css`)
        .pipe(cleanCSS())
        .pipe(concat(`main.css`))
        .pipe(gulp.dest(`prod/styles`));
});

gulp.task(`copy-html`, () => {
    return gulp.src(`index.html`)
        .pipe(gulp.dest(`prod`));
});

gulp.task(`prod`, gulp.series(`lint-js`, `lint-css`, `build-js`, `build-css`, `copy-html`));
