// When the window is fully loaded
window.onload = () => {
    // Get the menu button and navigation

    let theMenuButton = document.getElementById(`menu`);
    let nav = document.querySelector(`nav`);

    // Get the modal button, modal panel, and modal content pane
    let theModalButton = document.getElementById(`modal`);
    let theModalPanel = document.querySelector(`.modal-panel`);
    let theModalColor = document.querySelector(`.modal-content-pane`);

    // Changes the visibility of the menu when the menu button is clicked
    theMenuButton.addEventListener(`click`, () => {
        nav.classList.toggle(`hidden`);
    });

    // Display the modal and its color when the modal button is clicked
    theModalButton.addEventListener(`click`, () => {
        theModalPanel.style.display = `block`;
        theModalColor.style.display = `block`;
    });

    // "Escape" key action for the modal
    window.addEventListener(`keydown`, (event) => {
        if (event.key === `Escape`) {
            theModalPanel.style.display = `none`;
        }
    });
};
