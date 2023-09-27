const burger = document.querySelector('.hamburger'),
  close = document.querySelector('.menu__close'),
  menu = document.querySelector('.menu');

burger.addEventListener('click', () => menu.classList.add('menu_active'));
close.addEventListener('click', () => menu.classList.remove('menu_active'));

const percents = document.querySelectorAll('.skills__ratings-percent'),
  lines = document.querySelectorAll('.skills__ratings-line span');

percents.forEach((el, idx) => {
  lines[idx].style.width = el.innerText;
});
