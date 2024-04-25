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

// Expand submenus 1 and 2
let menuOneButton = document.querySelectorAll(`nav > ul > li > a`)[0];
let isMenuOneOpen = false;

menuOneButton.addEventListener(`click`, (event) => {
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
    event.preventDefault();
});

let menuTwoButton = document.querySelectorAll(`nav > ul > li > a`)[1];
let isMenuTwoOpen = false;

menuTwoButton.addEventListener(`click`, (event) => {
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
    event.preventDefault();
});

// Open and close the menu and sidetray
let menuButton = document.querySelectorAll(`#js-triggers > li > a`)[0];
let isMenuOpen = false;
const DROP_DOWN_DEFAULT_TOP = `10px`;
const DROP_DOWN_LOWERED_TOP = `80px`;
const SIDE_TRAY_DEFAULT_LEFT = `-100px`;
const SIDE_TRAY_OPENED_LEFT = `0`;

menuButton.addEventListener(`click`, (event) => {
    if (isMenuOpen) {
        if (!isMobileSized) {
            nav.style.top = DROP_DOWN_DEFAULT_TOP;
        }
        else {
            nav.style.left = SIDE_TRAY_DEFAULT_LEFT;
        }

        // Condense submenus
        let menuOneList = document.querySelectorAll(`nav > ul > li > ul`)[0];
        let menuTwoList = document.querySelectorAll(`nav > ul > li > ul`)[1];
        menuOneList.style.visibility = `hidden`;
        menuOneList.style.height = `0px`;
        menuTwoList.style.visibility = `hidden`;
        menuTwoList.style.height = `0px`;
        isMenuOneOpen = false;
        isMenuTwoOpen = false;

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
    event.preventDefault();
});

// Open and close modal
let modalButton = document.querySelectorAll(`#js-triggers > li > a`)[1];
let modalMask = document.getElementsByClassName(`modal-panel`)[0];
let modalPanel = document.getElementsByClassName(`modal-content-pane`)[0];
let isModalShowing = false;

modalButton.addEventListener(`click`, (event) => {
    if (!isModalShowing) {
        modalMask.style.height = `100vh`;
        modalMask.style.width = `100vw`;
        modalPanel.style.visibility = `visible`;
        isModalShowing = true;
    }
    event.preventDefault();
});

modalMask.addEventListener(`click`, () => {
    if (isModalShowing) {
        modalMask.style.height = `0`;
        modalMask.style.width = `0`;
        modalPanel.style.visibility = `hidden`;
        isModalShowing = false;
    }
});

modalPanel.addEventListener(`click`, (event) => {
    // This makes it so the user cannot click through the modal
    event.stopPropagation();
});

// Escape key functionality
window.addEventListener(`keydown`, (event) => {
    // Hide menu
    if (event.key === `Escape` && isMenuOpen) {
        if (!isMobileSized) {
            nav.style.top = DROP_DOWN_DEFAULT_TOP;
        }
        else {
            nav.style.left = SIDE_TRAY_DEFAULT_LEFT;
        }
        isMenuOpen = false;
    }
    // Remove Modal
    if (event.key === `Escape` && isModalShowing) {
        modalMask.style.height = `0`;
        modalMask.style.width = `0`;
        modalPanel.style.visibility = `hidden`;
        isModalShowing = false;
    }
});
