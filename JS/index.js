// Плавная прокрутка к секции "О нас"
const scrollBtn = document.querySelector('.hero-scroll-btn');
if (scrollBtn) {
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(scrollBtn.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // учёт высоты хедера
        behavior: 'smooth'
      });
    }
  });
}
