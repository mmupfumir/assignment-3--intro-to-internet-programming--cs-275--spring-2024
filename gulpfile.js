const {src, dest, series, watch} = require(`gulp`),
    browserSync = require(`browser-sync`),
    htmlCompressor = require(`gulp-htmlmin`),
    babel = require(`gulp-babel`),
    jsLinter = require(`gulp-eslint`),
    jsCompressor = require(`gulp-uglify`),
    sass = require(`gulp-sass`)(require(`sass`)),
    reload = browserSync.reload;

let browserChoice = `default`;

async function brave () {
    browserChoice = `brave browser`;
}

async function chrome () {
    browserChoice = `google chrome`;
}

async function edge () {
    browserChoice = `microsoft edge`;
}

async function firefox () {
    browserChoice = `firefox`;
}

async function opera () {
    browserChoice = `opera`;
}

async function safari () {
    browserChoice = `safari`;
}

async function vivaldi () {
    browserChoice = `vivaldi`;
}

async function allBrowsers () {
    browserChoice = [
        `brave browser`,
        `google chrome`,
        `microsoft edge`,
        `firefox`,
        `opera`,
        `safari`,
        `vivaldi`
    ];
}

let compileCSSForDev = () => {
    return src(`./styles/main.css`)
        .pipe(sass.sync({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`temp/styles`));
};

let lintJS = () => {
    return src(`./scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src(`./scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};


let compressHTML = () => {
    return src([`./*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compileCSSForProd = () => {
    return src(`./styles/*.css`)
        .pipe(sass.sync({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`prod/styles`));
};

let transpileJSForProd = () => {
    return src(`./scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/scripts`));
};

let copyUnprocessedAssetsForProd = () => {
    return src([
        `*.*`,
        `**`,
        `!temp/**`,
        `!temp`,
        `!prod/**`,
        `!prod`,
        `!README.md`,
        `!gulpfile.js`,
        `!package-lock.json`,
        `!package.json`,
        `!node_modules/`,
        `!node_modules/**`,
        `!scripts/**/*.js`,
        `!scripts/*.js`,
        `!styles/`,
        `!styles/**/*`,
        `!*.html`
    ], {dot: true})
        .pipe(dest(`prod`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `./`,
                `./html`
            ]
        }
    });

    watch(`./scripts/*.js`, series(lintJS, transpileJSForDev))
        .on(`change`, reload);

    watch(`./styles/*.css`, compileCSSForDev)
        .on(`change`, reload);
};

exports.brave = series(brave, serve);
exports.chrome = series(chrome, serve);
exports.edge = series(edge, serve);
exports.firefox = series(firefox, serve);
exports.opera = series(opera, serve);
exports.safari = series(safari, serve);
exports.compressHTML = compressHTML;
exports.vivaldi = series(vivaldi, serve);
exports.allBrowsers = series(allBrowsers, serve);
exports.compileCSSForProd = compileCSSForProd;
exports.lintJS = lintJS;
exports.transpileJSForProd = transpileJSForProd;
exports.transpileJSForDev = transpileJSForDev;
exports.default = serve;
exports.copyUnprocessedAssetsForProd = copyUnprocessedAssetsForProd;
exports.serve = series(
    compileCSSForDev,
    lintJS,
    transpileJSForDev,
    serve
);
exports.build = series(
    compressHTML,
    compileCSSForProd,
    transpileJSForProd,
    copyUnprocessedAssetsForProd
);
