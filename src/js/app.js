import mobileMenu from './mobileMenu';
import navScroll from './navScroll';
import smoothScroll from './smoothScroll';

mobileMenu();
navScroll();
smoothScroll();

$(document).ready(() => {
  $('.slick-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    variableWidth: true
  });
});
