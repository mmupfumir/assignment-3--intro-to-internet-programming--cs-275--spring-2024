window.onload = () => {
    const body = document.querySelector('body');
    const menu = document.querySelector('nav');

    const toggleMenu = () => {
        menu.classList.toggle('hidden');
    };

    const showMenu = document.getElementById('show_menu');
    showMenu.addEventListener('click', toggleMenu);

    const toggleModal = () => {
        modalPanel.classList.toggle('hidden');
        body.classList.toggle('no-scroll');
    };

    const showModal = document.getElementById('show_modal');
    showModal.addEventListener('click', toggleModal);

    const modalPanel = document.querySelector('.modal-panel');
    modalPanel.addEventListener('click', (event) => {
        if (event.target === modalPanel) {
            toggleModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modalPanel.classList.contains('hidden')) {
            toggleModal();
        }
    });
};
