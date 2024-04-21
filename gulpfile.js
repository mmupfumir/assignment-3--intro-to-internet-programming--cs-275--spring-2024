const {series, watch, dest, src} = require(`gulp`),
    browserSync = require(`browser-sync`);

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: `./`
        }
    });

    watch(`js/*.js`).on(`change`, browserSync.reload);
    watch(`styles/*.css`).on(`change`, browserSync.reload);
    watch(`*.html`).on(`change`, browserSync.reload);
};
