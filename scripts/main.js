let isMobileSized = false;

window.addEventListener(`load`, () => {
    if (736 < window.innerWidth) {
        isMobileSized = false;
    }
    else {
        isMobileSized = true;
    }
    console.log(isMobileSized);
    console.log(`Loaded`);
});

window.addEventListener(`resize`, () => {
    if (736 < window.innerWidth && isMobileSized === true) {
        location.reload();
    }
    if (736 >= window.innerWidth && isMobileSized === false) {
        location.reload();
    }
});
