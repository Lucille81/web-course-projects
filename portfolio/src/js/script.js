const burger = document.querySelector('.hamburger'),
  close = document.querySelector('.menu__close'),
  menu = document.querySelector('.menu');

burger.addEventListener('click', () => menu.classList.add('menu_active'));
close.addEventListener('click', () => menu.classList.remove('menu_active'));
