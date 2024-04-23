const menuButton = document.getElementById(`menu-button`);
const menuNav = document.getElementById(`menu-nav`);
const head = document.getElementById(`head`);
let visible = false;

menuButton.addEventListener(`click`, () => {
    if (!visible) {
        menuNav.style.visibility = `visible`;
        visible = true;
    } else {
        menuNav.style.visibility = `hidden`;
        visible = false;
    }
});

head.appendChild(menuNav);
