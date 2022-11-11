const swithThemeBtn = document.querySelector('.header__theme-btn');
const bodyRef = document.querySelector('.body');
const footerRef = document.querySelector('.footer');
const footerTextRef = document.querySelector('.footer-text');
const footerLinkRef = document.querySelector('.footer-link');

swithThemeBtn.addEventListener('click', switchToDarkTheme);

function switchToDarkTheme() {
  bodyRef.classList.toggle('dark-theme');
  const cardsMovieRef = document.querySelectorAll('.movie-info');
  footerRef.classList.toggle('footer__dark');
  footerTextRef.classList.toggle('footer-text__dark');
  footerLinkRef.classList.toggle('footer-link__dark');
}
