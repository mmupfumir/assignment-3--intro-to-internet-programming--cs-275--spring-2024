const menu1 = document.getElementsByClassName(`menu`)[0];
const menu2 = document.getElementsByClassName(`menu`)[1];
const menuButton = document.getElementById(`menu-button`);
const menuNav = document.getElementById(`menu-nav`);
let visible = false;

menuButton.onclick = function () {
    if (!visible) {
        menuNav.style.visibility = `visible`;
        visible = true;
    } else {
        menuNav.style.visibility = `hidden`;
        visible = false;
    }
};
