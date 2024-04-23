const body = document.querySelector(`body`);
const bodySideTrayHTML = `
<nav class="side-tray">
    <ul>
      <li><a href="#">Menu 1</a>
        <ul>
          <li><a href="#">1.1</a></li>
          <li><a href="#">1.2</a></li>
          <li><a href="#">1.3</a></li>
        </ul>
      </li>
      <li><a href="#">Menu 2</a>
        <ul>
          <li><a href="#">2.1</a></li>
          <li><a href="#">2.2</a></li>
          <li><a href="#">2.3</a></li>
        </ul>
      </li>
    </ul>
</nav>`;

body.innerHTML += bodySideTrayHTML;

document.addEventListener(`DOMContentLoaded`, () => {
    const showMenuTrigger = document.querySelector(`#js-triggers li:first-child a`);
    const nav = document.querySelector(`nav`);
    const sideTray = document.querySelector(`.side-tray`);

    showMenuTrigger.addEventListener(`click`, (event) => {
        event.preventDefault();
        if (window.innerWidth <= 735) {
            sideTray.classList.toggle(`visible`);
        } else {
            nav.classList.toggle(`visible`);
        }

    });

    const menuItems = document.querySelectorAll(`nav ul > li > a`);
    const menuItemsSideTray = document.querySelectorAll(`.side-tray > ul > li > ul`);

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener(`click`, (event) => {
            event.preventDefault();
            const subMenuDropDown = menuItem.nextElementSibling;
            subMenuDropDown.classList.toggle(`visible`);
        });
    });

    menuItemsSideTray.forEach((menuItemSideTray) => {
        menuItemSideTray.addEventListener(`click`, (event) => {
            event.preventDefault();
            const subMenu = menuItemSideTray.nextElementSibling;
            if (subMenu) {
                console.log(`Inside of if statement`);
                console.log(subMenu.classList);
                subMenu.classList.toggle(`visible`);
            }
        });
    });
});
