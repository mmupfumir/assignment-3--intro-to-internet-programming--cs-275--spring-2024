const modalPanel = document.getElementsByClassName(`modal-panel`)[0];
const modalButton = document.getElementById(`modal-button`);

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
