const emptyPageRef = document.querySelector('.empty-page');
const imgRef = document.querySelector('.empty-page__img');

function checkLocalStorage() {
  const watched = localStorage.getItem('watched');
  const queue = localStorage.getItem('queue');

  if (watched || queue) {
    return;
  }
  //
  imgRef.classList.remove('hide');
  renderEmptyImage();
}

function renderEmptyImage() {
  const markup = `<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>`;
  return (emptyPageRef.innerHTML = markup);
}

checkLocalStorage();

export { checkLocalStorage, renderEmptyImage };
