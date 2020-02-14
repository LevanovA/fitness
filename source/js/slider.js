'use strict';

$(document).ready(function () {
  $('.coach__list').slick({
    dots: false,
    infinite: false,
    speed: 500,
    nextArrow: document.querySelector('.coach__button--next'),
    prevArrow: document.querySelector('.coach__button--prev'),
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.comment__list').slick();
});
