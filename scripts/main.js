window.onload = () => {
    alert(`It Works`);
};

document.addEventListener(`DOMContentLoaded`, function(){
    // Get the "Show Menu" button, which is the first li in #js-triggers
    //let showMenuButton = document.querySelector(`#js-triggers li:first-child a`);
    // Get the "Show Modal" button, which is the second li in #js-triggers
    let showModalButton = document.querySelector(`#js-triggers li:nth-child(2) a`);
    let showModalPanel = document.querySelector(`.modal-panel`);
    function toggleModal(){
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
        toggleModal();
    });
});
