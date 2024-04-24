let jsTriggerList = document.querySelectorAll(`#js-triggers li`);
jsTriggerList.forEach(function(listItem) {
    let anchor = listItem.querySelector(`a`);
    let text = anchor.textContent.trim();
    if(text === `Show Menu`){
        anchor.id = `show-menu`;
    } else if (text === `Show Modal`) {
        anchor.id = `show-modal`;
    }
});

let showModal = document.getElementById(`show-modal`);
let modalPanel = document.querySelector(`.modal-panel`);
let menuButton = document.getElementById(`show-menu`);
let nav = document.querySelector(`nav`);
let ul = document.querySelector(`ul`);
let menuState = false;
let sidebarMode = false;
let previousWidth = window.innerWidth;
let width = window.innerWidth;
const MENU_LEFT = `--position--menu-nav-left`;
const MENU_TOP = `--position--menu-nav-top`;
const WIDTH_THRESHOLD = 756;
const TRANSITION_DURATION = `.2s`;

showModal.addEventListener(`click`, () => {
    modalPanel.style.display = `block`;
});

modalPanel.addEventListener(`click`, () => {
    hideModal();
});

function hideModal() {
    modalPanel.style.display = `none`;
}

document.addEventListener(`keydown`, function(event) {
    if (event.code === `Escape`) {
        hideModal();
    }
});

menuButton.addEventListener(`click`, () => {
    nav.style.transitionDuration = TRANSITION_DURATION;
    menuState = !menuState;
    menuPositionUpdater();
});

window.addEventListener(`resize`, passWidthThreshold);
sideBarUpdate();

function passWidthThreshold() {
    width = window.innerWidth;

    if ((previousWidth < WIDTH_THRESHOLD && width >= WIDTH_THRESHOLD)
    || (previousWidth >= WIDTH_THRESHOLD && width < WIDTH_THRESHOLD)){
        menuState = false;
        window.location.reload();
    }
    previousWidth = width;
    sideBarUpdate();
}

function sideBarUpdate() {
    if(width < WIDTH_THRESHOLD){
        nav.style.transitionDuration = `0s`;
        sidebarMode = true;
        ul.style.display = `block`;
    }
    else{
        nav.style.transitionDuration = `0s`;
        sidebarMode = false;
        ul.style.display = `flex`;
    }
    menuPositionUpdater();
}

function menuPositionUpdater() {
    if(menuState){
        if(sidebarMode){
            nav.style.setProperty(MENU_LEFT, `70px`);
            nav.style.setProperty(MENU_TOP, `calc(var(--header-height) + 40px)`);
        }
        else{
            nav.style.setProperty(MENU_LEFT, `50%`);
            nav.style.setProperty(MENU_TOP, `calc(var(--header-height) + 40px)`);
        }
    }
    else {
        if(sidebarMode){
            nav.style.setProperty(MENU_LEFT, `-100px`);
            nav.style.setProperty(MENU_TOP, `calc(var(--header-height) + 40px)`);
        }
        else{
            nav.style.setProperty(MENU_LEFT, `50%`);
            nav.style.setProperty(MENU_TOP, `50px`);
        }
    }
}
