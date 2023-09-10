$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    adaptiveHeight: true,
    initialSlide: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./icons/arrow-left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="./icons/arrow-right.svg"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  // --- Switch tabs (jQuery) ---

  $('ul.catalog__tabs').on(
    'click',
    'li:not(.catalog__tab_active)',
    function () {
      $(this)
        .addClass('catalog__tab_active')
        .siblings()
        .removeClass('catalog__tab_active')
        .closest('div.container')
        .find('div.catalog__content')
        .removeClass('catalog__content_active')
        .eq($(this).index())
        .addClass('catalog__content_active');
    }
  );

  // --- Toggle catalog-item__content / __list (jQuery) ---

  function toggleSide(link) {
    $(link).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__wrapper')
          .eq(i)
          .toggleClass('catalog-item__wrapper_active');
      });
    });
  }

  toggleSide('.catalog-item__link');
  toggleSide('.catalog-item__back');

  // --- Modal ---

  $('[data-modal="consultation"]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('.modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  // --- Validation ---

  const validateRules = {
    rules: {
      name: 'required',
      phone: {
        required: true,
        minlength: 11,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: 'Please specify your name',
      phone: {
        required: 'Please specify your phone number',
        minlength: jQuery.validator.format('At least {0} characters required!'),
      },
      email: {
        required: 'We need your email address to contact you',
        email: 'Your email address must be in the format of name@domain.com',
      },
    },
  };

  $('#consultation-form').validate(validateRules);
  $('#consultation form').validate(validateRules);
  $('#order form').validate(validateRules);

  // --- Masked Phone Input ---

  $('input[name="phone"]').mask('+7 (999) 999-9999');

  // --- Scroll Pageup ---

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn('slow');
    } else {
      $('.pageup').fadeOut('slow');
    }
  });

  new WOW().init();
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
