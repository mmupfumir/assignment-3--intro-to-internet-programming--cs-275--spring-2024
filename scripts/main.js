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
});

window.addEventListener(`resize`, () => {
    if (736 < window.innerWidth && isMobileSized === true) {
        location.reload();
    }
    if (736 >= window.innerWidth && isMobileSized === false) {
        location.reload();
    }
});

// Open and close the menu and sidetray
let menuButton = document.querySelectorAll(`#js-triggers > li > a`)[0];
let isMenuOpen = false;
const DROP_DOWN_DEFAULT_TOP = `10px`;
const DROP_DOWN_LOWERED_TOP = `80px`;
const SIDE_TRAY_DEFAULT_LEFT = `-100px`;
const SIDE_TRAY_OPENED_LEFT = `0`;

menuButton.addEventListener(`click`, () => {
    if (isMenuOpen) {
        if (!isMobileSized) {
            nav.style.top = DROP_DOWN_DEFAULT_TOP;
        }
        else {
            nav.style.left = SIDE_TRAY_DEFAULT_LEFT;
        }
        isMenuOpen = false;
    }
    else {
        if (!isMobileSized) {
            nav.style.top = DROP_DOWN_LOWERED_TOP;
        }
        else {
            nav.style.left = SIDE_TRAY_OPENED_LEFT;
        }
        isMenuOpen = true;
    }
});

// Escape key functionality
window.addEventListener(`keydown`, (event) => {
    if (event.key === `Escape` && isMenuOpen) {
        if (!isMobileSized) {
            nav.style.top = DROP_DOWN_DEFAULT_TOP;
        }
        else {
            nav.style.left = SIDE_TRAY_DEFAULT_LEFT;
        }
    }
});

// Expand menus 1 and 2
let menuOneButton = document.querySelectorAll(`nav > ul > li > a`)[0];
let isMenuOneOpen = false;

menuOneButton.addEventListener(`click`, () => {
    let menuOneList = document.querySelectorAll(`nav > ul > li > ul`)[0];
    if (isMenuOneOpen) {
        menuOneList.style.visibility = `hidden`;
        menuOneList.style.height = `0px`;
        isMenuOneOpen = false;
    }
    else {
        menuOneList.style.visibility = `visible`;
        menuOneList.style.height = `auto`;
        isMenuOneOpen = true;
    }
});

let menuTwoButton = document.querySelectorAll(`nav > ul > li > a`)[1];
let isMenuTwoOpen = false;

menuTwoButton.addEventListener(`click`, () => {
    let menuTwoList = document.querySelectorAll(`nav > ul > li > ul`)[1];
    if (isMenuTwoOpen) {
        menuTwoList.style.visibility = `hidden`;
        menuTwoList.style.height = `0px`;
        isMenuTwoOpen = false;
    }
    else {
        menuTwoList.style.visibility = `visible`;
        menuTwoList.style.height = `auto`;
        isMenuTwoOpen = true;
    }
});
