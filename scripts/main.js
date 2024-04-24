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
    const showModalBtn = document.querySelector("#js-triggers li:nth-child(2) a");
    const closeModalBtn = document.querySelector(".modal-panel .close");
    const modal = document.querySelector(".modal-panel");
    const dropdownMenu = document.getElementById("dropdown-menu");



    function toggleElement(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }

    showModalBtn.addEventListener("click", function (event) {

        event.preventDefault();

        modal.style.display = "block";

        document.addEventListener("keydown", closeModalEsc);

    });



    // Close Modal

    closeModalBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeModal();

        }

    });



    function closeModal() {

        modal.style.display = "none";

        document.removeEventListener("keydown", closeModalEsc);

    }



    function closeModalEsc(e) {

        if (e.key === "Escape") {

            closeModal();

        }

    }



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
            dropdownMenu = menuItem.nextElementSibling;
            dropdownMenu.classList.toggle(`visible`);
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

