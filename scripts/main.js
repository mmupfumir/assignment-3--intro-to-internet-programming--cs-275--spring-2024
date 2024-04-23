const modalPanel = document.getElementsByClassName(`modal-panel`)[0];
const modalButton = document.getElementById(`modal-button`);

modalButton.onclick = function () {
    modalPanel.style.display = `block`;
};

window.onclick = function(event) {
    if (event.target == modalPanel) {
        modalPanel.style.display = `none`;
    }
} ;
