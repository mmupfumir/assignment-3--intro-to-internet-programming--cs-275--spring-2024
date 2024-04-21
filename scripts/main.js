let isMobileSized = false;
let nav = document.getElementsByTagName(`nav`)[0];

window.addEventListener(`load`, () => {
    if (736 < window.innerWidth) {
        isMobileSized = false;
        nav.setAttribute(`id`, `drop-down`);
    }
    else {
        isMobileSized = true;
        nav.setAttribute(`id`, `side-tray`);
    }
    console.log(isMobileSized);
    console.log(`Loaded`);
});

window.addEventListener(`resize`, () => {
    if (736 < window.innerWidth && isMobileSized === true) {
        location.reload();
    }
    if (736 >= window.innerWidth && isMobileSized === false) {
        location.reload();
    }
});

let menuButton = document.querySelectorAll(`#js-triggers > li > a`)[0];
let isMenuOpen = false;

menuButton.addEventListener(`click`, () => {
    if (isMenuOpen) {
        if (!isMobileSized) {
            nav.style.top = `10px`;
        }
        else {
            nav.style.left = `-100px`;
        }
        isMenuOpen = false;
    }
    else {
        if (!isMobileSized) {
            nav.style.top = `80px`;
        }
        else {
            nav.style.left = `0px`;
        }
        isMenuOpen = true;
    }
});
