let lastScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const header = document.querySelector('header');
      if (lastScrollY > 120) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
      ticking = false;
    });
    ticking = true;
  }
});

/* ---------- Адаптивность ---------- */

const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Сжатие при скролле
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Открытие меню
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
});
