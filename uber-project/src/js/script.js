const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  menuItems = document.querySelectorAll('.menu_item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger_active');
  menu.classList.toggle('menu_active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('hamburger_active');
    menu.classList.remove('menu_active');
  });
});
