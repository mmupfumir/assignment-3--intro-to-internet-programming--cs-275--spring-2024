document.addEventListener('DOMContentLoaded', function () {
    const showMenuTrigger = document.querySelector('#js-triggers li:nth-child(1) a');
    const showModalTrigger = document.querySelector('#js-triggers li:nth-child(2) a');
    const modalPanel = document.querySelector('.modal-panel');
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');

    showMenuTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        // Toogle menu visibility
    });

    showModalTrigger.addEventListener('click', function (event){
        event.preventDefault();
        modalPanel.classList.toggle('show');
        document.body.classList.toggle('modal-open');

        if (modalPanel.classList.contains('show')) {
            document.body.appendChild(modalBackground);
        }
    });

    modalBackground.addEventListener('click', function () {
        modalPanel.classList.remove('show');
        document.body.classList.remove('modal-open');
        document.body.removeChild(modalBackground);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modalPanel.classList.remove('show');
            document.body.classList.remove('modal-open');
            document.body.removeChild(modalBackground);
        }
    });
});
