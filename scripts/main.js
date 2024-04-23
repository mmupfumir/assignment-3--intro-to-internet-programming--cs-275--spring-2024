const modalPanel = document.getElementsByClassName(`modal-panel`)[0];
const modalButton = document.getElementById(`modal-button`);
const menuButton = document.getElementById(`menu-button`);
const menuNav = document.getElementById(`menu-nav`);
const head = document.getElementById(`head`);
let visible = false;

modalButton.onclick = function () {
    modalPanel.style.display = `block`;
};

window.onclick = function(event) {
    if (event.target == modalPanel) {
        modalPanel.style.display = `none`;
    }
};

document.onkeydown = function(evt) {
    let isEscape = false;
    if (`key` in evt) {
        isEscape = (evt.key === `Escape` || evt.key === `Esc`);
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        modalPanel.style.display = `none`;
    }
};

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
