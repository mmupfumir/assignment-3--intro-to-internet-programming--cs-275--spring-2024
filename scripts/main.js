document.addEventListener(`DOMContentLoaded`, function(){
    // Get the "Show Menu" button, which is the first li in #js-triggers
    let showMenuButton = document.querySelector(`#js-triggers li:first-child a`);
    let showMenuBar = document.querySelector(`#menu-bar`);

    // Get the "Show Modal" button, which is the second li in #js-triggers
    let showModalButton = document.querySelector(`#js-triggers li:nth-child(2) a`);
    let showModalPanel = document.querySelector(`.modal-panel`);
    let cancelModalButton = document.querySelector(`.modal-content`);

    let modalContent = document.getElementsByClassName(`modal-content`)[0];
    modalContent.textContent = `X`;

    function toggleMenuShowing(){
        if (showMenuBar.style.visibility === `visible`) {
            showMenuBar.style.visibility = `hidden`;
            showMenuBar.style.opacity = `0`;
        } else {
            showMenuBar.style.visibility = `visible`;
            showMenuBar.style.opacity = `1`;
        }
    }

    function toggleModalShowing(){
        if (showModalPanel.style.visibility === `visible`) {
            showModalPanel.style.visibility = `hidden`;
            showModalPanel.style.opacity = `0`;
        } else {
            showModalPanel.style.visibility = `visible`;
            showModalPanel.style.opacity = `1`;
        }
    }
    // Event Listener for the 'ShowModal' button click
    showModalButton.addEventListener(`click`, (c) => {
        c.preventDefault();
        toggleModalShowing();
    });

    // Event Listener for the 'ShowMenu' button click
    showMenuButton.addEventListener(`click`, (c) => {
        c.preventDefault();
        toggleMenuShowing();
    });

    // Event Listener for the 'cancelModalButton' button click
    cancelModalButton.addEventListener(`click`, (c) => {
        c.preventDefault();
        toggleModalShowing();
    });

});
