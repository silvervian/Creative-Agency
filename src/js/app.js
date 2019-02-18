import mobileMenu from './mobileMenu';
import navScroll from './navScroll';
import smoothScroll from './smoothScroll';

mobileMenu();
navScroll();
smoothScroll();

$(document).ready(() => {
  $('.slick-slider').slick({
    centerMode: true,
    arrows: false,
    // autoplay: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: unslick
    //   }
    // ]
  });
});
