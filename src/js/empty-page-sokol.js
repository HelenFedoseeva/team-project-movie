const emptyPageRef = document.querySelector('.empty-page');
const imgRef = document.querySelector('.empty-page__img');

function renderEmptyImage() {
  const markup = `<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>`;
  return (emptyPageRef.innerHTML = markup);
}

export { renderEmptyImage };
