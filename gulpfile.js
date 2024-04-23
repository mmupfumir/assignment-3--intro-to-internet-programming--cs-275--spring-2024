const { src, dest, series, watch } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();


const compressHTML = () => {
    return src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('prod'));
};


const compressJS = () => {
    return src('scripts/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('prod/scripts'));
};

const transpileJSForDev = () => {
    return src('scripts/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel())
        .pipe(dest('temp/scripts'));
};


const serve = () => {
    browserSync.init({
        server: {
            baseDir: ['.']
        }
    });

    watch('*.html').on('change', browserSync.reload);
    watch('styles/*.css').on('change', browserSync.reload);
    watch('scripts/*.js', series(transpileJSForDev)).on('change', browserSync.reload);
};

exports.compressHTML = compressHTML;
exports.compressJS = compressJS;
exports.transpileJSForDev = transpileJSForDev;
exports.serve = serve;
exports.build = series(
    compressHTML,
    compressJS
);
