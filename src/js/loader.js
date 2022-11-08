const loaderRef = document.querySelector('.loader');

function loaderShow() {
  loaderRef.classList.remove('visually-hidden');
}

function loaderHide() {
  loaderRef.classList.add('visually-hidden');
}

export { loaderShow, loaderHide };
