const throttle = require('lodash.throttle');

const buttonEl = document.querySelector('.button-back');

document.addEventListener('scroll', throttle(onWindowScroll, 400));

function onWindowScroll(e) {
  if (window.scrollY >= 700) {
    buttonEl.classList.remove('hidden');
    buttonEl.addEventListener('click', onButtonClick);
  } else if (window.scrollY <= 700) {
    buttonEl.classList.add('hidden');
    buttonEl.removeEventListener('click', onButtonClick);
  }
}

function onButtonClick(e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
