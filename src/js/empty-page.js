const emptyPageRef = document.querySelector('.main-library__empty-page');

function checkLocalStorage() {
  // const watched = localStorage.getItem('watched');
  // const queue = localStorage.getItem('queue');

  // if (watched || queue) {
  //   return;
  // }
  // const imgRef = document.querySelector('.empty-page__img');
  // imgRef.classList.remove('opacity');
  renderEmptyImage();
}

function renderEmptyImage() {
  const markup = `<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>
  <img class="empty-page__img" src="../images/empty-page/movies-popcorn.png" alt="popcorn bucket">`;
  return emptyPageRef.insertAdjacentHTML('afterbegin', markup);
}

// checkLocalStorage();

export { checkLocalStorage, renderEmptyImage };
