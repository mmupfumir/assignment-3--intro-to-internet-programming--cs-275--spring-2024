// Define modal button and panel variables
let buttonModal = document.querySelectorAll(`#js-triggers > li:last-child > a`)[0];
let modalPanel = document.getElementsByClassName(`modal-panel`)[0];

// Function to handle viewport resizing
function handleResize() {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Check if any interaction is currently showing
    const isInteractionShowing = modalPanel.style.display === `inline`;

    // Check if viewport crossed the 736-pixel threshold and any interaction is showing
    if (viewportWidth < 736 && isInteractionShowing) {
        // Reset the page to the initial state
        // For example, hide the modal, tray, and drop-down menu
        modalPanel.style.display = `none`; // Example, adjust according to your implementation
        // Additional code to reset other interactions if needed
    } else {
        // Adjust modal panel size
        modalPanel.style.width = viewportWidth + `px`;
        modalPanel.style.height = viewportHeight + `px`;
    }
}

// Add event listener for viewport resize
window.addEventListener(`resize`, handleResize);

// Call handleResize once to set initial modal size
handleResize();

// Add event listener to modal button
buttonModal.addEventListener(`click`, () => { //open modal or close
    modalPanel.style.display = `inline`;

    // Add event listener to close modal with keyboard
    document.addEventListener(`keydown`, (k) => {
        if (k.code === `Escape`) {
            modalPanel.style.display = `none`;
        }
    });

    // Add event listener to modal content pane to stop event bubbling
    let modalContentPane = modalPanel.getElementsByClassName(`modal-content-pane`)[0];
    modalContentPane.addEventListener(`click`, (event) => {
        event.stopPropagation();
    });

    // Add event listener to modal panel to close modal on click
    modalPanel.addEventListener(`click`, (event) => {
        event.stopPropagation();
        modalPanel.style.display = `none`;
    });
});

// Define variables for menu button and drop-down menu
let buttonMenu = document.getElementById(`showMenu`);
let dropdownMenu = document.querySelector(`nav > ul`);

// Add event listener to menu button
buttonMenu.addEventListener(`click`, () => {
    dropdownMenu.classList.toggle(`show`);
});

// Add event listener to window for closing the menu when clicking outside
window.addEventListener(`click`, (event) => {
    if (!event.target.matches(`#showMenu`)) {
        dropdownMenu.classList.remove(`show`);
    }
});
