const emptyPageRef = document.querySelector('.empty-page');
const imgRef = document.querySelector('.empty-page__img');

function checkLocalStorage() {
  const watched = JSON.parse(localStorage.getItem('watched'));
  const queue = JSON.parse(localStorage.getItem('queue'));

  try {
    if ((!queue || queue.length > 0) && (!watched || watched.length === 0)) {
      imgRef.classList.remove('hide');
      renderEmptyImage();
      return;
    } else if (watched.length > 0 && queue.length > 0) {
      return;
    } else if (queue > 0) {
      return;
    } else if (watched.length > 0 && queue.length === 0) {
      imgRef.classList.remove('hide');
      renderEmptyImage();
    }
  } catch (error) {
    console.log(error);
  }
}

function renderEmptyImage() {
  const markup = `<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>`;
  return (emptyPageRef.innerHTML = markup);
}

// checkLocalStorage();

export { checkLocalStorage, renderEmptyImage };

function renderPopcornImg() {
  const watched = JSON.parse(localStorage.getItem('watched'));
  const queue = JSON.parse(localStorage.getItem('queue'));
  try {
    if (!watched || (watched.length === 0 && (!queue || queue.length > 0))) {
      imgRef.classList.remove('hide');
      renderEmptyImage();
      return;
    } else if (watched.length === 0 && queue.length === 0) {
      imgRef.classList.remove('hide');
      renderEmptyImage();
      return;
    } else if (watched.length > 0) {
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

renderPopcornImg();
