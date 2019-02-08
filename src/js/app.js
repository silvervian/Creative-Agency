import mobileMenu from './mobileMenu';
import navScroll from './navScroll';

mobileMenu();
navScroll();

// Smooth transition between anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
