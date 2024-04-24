const { src, dest, series, watch } = require(`gulp`),
    browserSync = require(`browser-sync`),
    jsLinter = require(`gulp-eslint`),
    babel = require(`gulp-babel`),
    CSSLinter = require(`gulp-stylelint`);

let browserChoice = `default`;

async function brave() {
    browserChoice = `brave browser`;
}

async function chrome() {
    browserChoice = `google chrome`;
}

async function edge() {
    browserChoice = `microsoft-edge`;
}

async function firefox() {
    browserChoice = `firefox`;
}

async function opera() {
    browserChoice = `opera`;
}

async function safari() {
    browserChoice = `safari`;
}

async function vivaldi() {
    browserChoice = `vivaldi`;
}

async function allBrowsers() {
    browserChoice = [
        `brave browser`,
        `google chrome`,
        `microsoft-edge`, // Note: In Windows, this might need to be microsoft-edge
        `firefox`,
        `opera`,
        `safari`,
        `vivaldi`
    ];
}

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(
            jsLinter({ configFile: `.eslintrc` })
        )
        .pipe(jsLinter.formatEach(`compact`));
};

let lintCSS = () => {
    return src(`styles/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                { formatter: `string`, console: true }
            ],
            configFile: `.stylelintrc`
        })
        );
};

let transpileJSForDev = () => {
    return src(`scripts/*.js`)
        .pipe(babel())
        .pipe(dest(`dev/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: `./`
        }
    });

    watch(`scripts/*.js`).on(`change`, browserSync.reload);
    watch(`styles/*.css`).on(`change`, browserSync.reload);
    watch(`*.html`).on(`change`, browserSync.reload);
};

exports.brave = series(brave, serve);
exports.chrome = series(chrome, serve);
exports.edge = series(edge, serve);
exports.firefox = series(firefox, serve);
exports.opera = series(opera, serve);
exports.safari = series(safari, serve);
exports.vivaldi = series(vivaldi, serve);
exports.allBrowsers = series(allBrowsers, serve);
exports.default = serve;
exports.lintJS = lintJS;
exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.serve = series(
    lintJS,
    serve,
    lintCSS,
    transpileJSForDev
);
