
document.addEventListener(`DOMContentLoaded`, function(){
    let modalButton = document.querySelector(`#js-triggers li:nth-child(2) a`);
    let modalPanel = document.querySelector(`.modal-panel`);

    function toggleModal(){
        modalPanel.style.visibility = modalPanel.style.visibility === `visible` ? `hidden` : `visible`;
        modalPanel.style.opacity = modalPanel.style.opacity === `1` ? `0` : `1`;
    }

    modalButton.addEventListener(`click`, (event)=>{
        event.preventDefault();
        toggleModal();
    });
    document.addEventListener(`keydown`,function(event){
        if(event.key === `Escape`) {
            modalPanel.style.visibility = `hidden`;
            modalPanel.style.opacity = `0`;
        }
    });
    modalPanel.addEventListener(`click`,(event)=>{
        if(event.target === modalPanel){
            modalPanel.style.visibility = `hidden`;
            modalPanel.style.opacity = `0`;
        }
    });
});





document.addEventListener(`DOMContentLoaded`, function(){
    const menuButton = document.querySelector(`#js-triggers li:nth-child(1) a`);
    const menuPanel = document.querySelector(`nav `);


    menuButton.addEventListener(`click`, function(event){
        event.preventDefault();
        if (menuPanel.style.maxHeight) {
            menuPanel.style.maxHeight = null; // If menu is visible, hide it
        } else {
            menuPanel.style.maxHeight = menuPanel.scrollHeight + `px`; // If menu is hidden, show it
        }
    });

});


// window.onload = () => {
//     alert(`Js is working`);
// };
