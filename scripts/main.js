document.addEventListener(`DOMContentLoaded`, () => {
    const showMenuTrigger = document.querySelector(`#js-triggers li:first-child a`);
    const nav = document.querySelector(`nav`);
    const sideTray = document.querySelector(`.side-tray`);

    showMenuTrigger.addEventListener(`click`, (event) => {
        event.preventDefault();
        nav.classList.toggle(`visible`);

        if (window.innerWidth <= 735) {
            sideTray.classList.toggle(`visible`);
        }
    });

    const menuItems = document.querySelectorAll(`nav ul > li > a`);

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener(`click`, (event) => {
            event.preventDefault();
            const subMenu = menuItem.nextElementSibling;
            subMenu.classList.toggle(`visible`);
        });
    });
});
