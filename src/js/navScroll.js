const nav = document.querySelector('header');
const navHeight = nav.offsetHeight;
const addClassNav = () => nav.classList.add('nav-scroll');
const removeClassNav = () => nav.classList.remove('nav-scroll');

function init() {
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos >= navHeight) {
      addClassNav();
    } else {
      removeClassNav();
    }
  });
}

export default init;
