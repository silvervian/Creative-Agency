function functionScroll() {
  const section = document.querySelectorAll('[data-scroll]');

  const sections = {};
  let i = 0;

  [...section].forEach((e) => {
    sections[e.id] = e.offsetTop;
  });

  for (i in sections) {
    if (sections[i] <= window.pageYOffset + 100) {
      document.querySelector('.navigation__link--active').classList.remove('navigation__link--active');
      document.querySelector(`li.navigation__item a[href*="${i}"]`).classList.add('navigation__link--active');
    }
  }
}

function functionScrollMobile() {
  const section = document.querySelectorAll('[data-scroll]');

  const sections = {};
  let i = 0;
  [...section].forEach((e) => {
    sections[e.id] = e.offsetTop;
  });

  for (i in sections) {
    if (sections[i] <= window.pageYOffset + 100) {
      document.querySelector('.menu-mobile__link--active').classList.remove('menu-mobile__link--active');
      document.querySelector(`li.menu-mobile__item a[href*="${i}"]`).classList.add('menu-mobile__link--active');
    }
  }
}

function init() {
  window.addEventListener('scroll', () => {
    functionScroll();
    functionScrollMobile();
  });

  window.addEventListener('resize', () => {
    functionScroll();
    functionScrollMobile();
  });
}


export default init;
