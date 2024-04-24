document.addEventListener(`DOMContentLoaded`, function() {

    var showMenuBtn = document.getElementById(`showMenuBtn`);
    var menu1Box = document.getElementById(`menu1Box`);
    var menu2Box = document.getElementById(`menu2Box`);

    if (showMenuBtn && menu1Box && menu2Box) {
        showMenuBtn.addEventListener(`click`, function() {
            if (menu1Box.style.display === `none` || menu1Box.style.display === ``) {
                menu1Box.style.display = `block`;
                menu2Box.style.display = `block`;
            } else {
                menu1Box.style.display = `none`;
                menu2Box.style.display = `none`;
            }
        });
    }

    var menuTrigger = document.getElementById(`menuTrigger`);
    var submenu1 = document.getElementById(`submenu1`);

    if (menuTrigger && submenu1) {
        menuTrigger.addEventListener(`click`, function(e) {
            e.preventDefault();
            if (submenu1.style.display === `block`) {
                submenu1.style.display = `none`;
            } else {
                submenu1.style.display = `block`;
            }
        });
    }

    var menuTrigger2 = document.getElementById(`menuTrigger2`);
    var submenu2 = document.getElementById(`submenu2`);

    if (menuTrigger2 && submenu2) {
        menuTrigger2.addEventListener(`click`, function(e) {
            e.preventDefault();
            if (submenu2.style.display === `block`) {
                submenu2.style.display = `none`;
            } else {
                submenu2.style.display = `block`;
            }
        });
    }

    var modalTrigger = document.getElementById(`modalTrigger`);
    var modal = document.getElementById(`js-modal`);

    if (modalTrigger && modal) {
        modalTrigger.addEventListener(`click`, function(e) {
            e.preventDefault();
            showModal();
        });

        modal.addEventListener(`click`, function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });

        document.addEventListener(`keydown`, function(e) {
            if (e.key === `Escape` && modal.style.display === `flex`) {
                hideModal();
            }
        });
    }

    function showModal() {
        modal.style.display = `flex`;
    }

    function hideModal() {
        modal.style.display = `none`;
    }
});
