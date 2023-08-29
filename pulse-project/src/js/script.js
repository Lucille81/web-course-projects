$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: true,
    initialSlide: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./icons/arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./icons/arrow-right.svg"></button>',
  });

  // --- Switch tabs (jQuery) ---

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active')
      .siblings()
      .removeClass('catalog__tab_active')
      .closest('div.container')
      .find('div.catalog__content')
      .removeClass('catalog__content_active')
      .eq($(this).index())
      .addClass('catalog__content_active');
  });

  // --- Toggle catalog-item__content / __list (jQuery) ---

  function toggleSide(link) {
    $(link).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__wrapper').eq(i).toggleClass('catalog-item__wrapper_active');
      });
    });
  }

  toggleSide('.catalog-item__link');
  toggleSide('.catalog-item__back');
});

// --- Switch tabs (Vanilla JavaScript) ---

// const tabs = document.querySelectorAll('.catalog__tab'),
//   contents = document.querySelectorAll('.catalog__content');

// tabs.forEach((tab, idx) => {
//   tab.addEventListener('click', () => {
//     tabs.forEach((tab) => tab.classList.remove('catalog__tab_active'));
//     tabs[idx].classList.add('catalog__tab_active');

//     contents.forEach((content) => content.classList.remove('catalog__content_active'));
//     contents[idx].classList.add('catalog__content_active');
//   });
// });

// --- Toggle catalog-item__content / __list (Vanilla JavaScript) ---

// const wrappers = document.querySelectorAll('.catalog-item__wrapper'),
//   links = document.querySelectorAll('.catalog-item__link'),
//   backLinks = document.querySelectorAll('.catalog-item__back');

// const toggleSide = (list) => {
//   list.forEach((item, idx) => {
//     item.addEventListener('click', (e) => {
//       e.preventDefault();
//       wrappers[idx].classList.toggle('catalog-item__wrapper_active');
//     });
//   });
// };

// toggleSide(links);
// toggleSide(backLinks);
