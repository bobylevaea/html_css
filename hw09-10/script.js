const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const menuClose = document.querySelector('.menu_close');


function toggleMenu() {
  menu.classList.toggle('menu-hidden');
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);