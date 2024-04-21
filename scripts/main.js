let MenuAnchor1 = document.querySelector(`nav > ul > li:nth-child(1) > a`);
let MenuAnchor2 = document.querySelector(`nav > ul > li:nth-child(1) > a`);
let ulMenu1 = document.querySelector(`nav > ul > li:nth-child(1) > ul`);
let ulMenu2 = document.querySelector(`nav > ul > li:nth-child(2) > ul`);

MenuAnchor1.setAttribute(`class`, `dropdown-toggle`);
MenuAnchor2.setAttribute(`class`, `dropdown-toggle`);
ulMenu1.setAttribute(`class`, `dropdown-menu`);
ulMenu2.setAttribute(`class`, `dropdown-menu`);
