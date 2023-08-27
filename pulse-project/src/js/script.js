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
});
