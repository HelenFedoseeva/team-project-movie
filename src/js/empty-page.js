const emptyPageRef = document.querySelector('.main-library__empty-page');
console.log(emptyPageRef);

function checkLocalStorage() {
  const watched = localStorage.getItem('watched');
  const queue = localStorage.getItem('queue');

  if (watched || queue) {
    return;
  }
  renderEmptyImage();
}

function renderEmptyImage() {
  const markup = `<p class="empty-page__notification">Sorry 🤷‍♂️! <br> There are no movies in Your library yet. So, grab Your popcorn bucket and come back to us!</p>
            <img src="./images/empty-page/movie-night.png"  alt="movie-night" width="820" height="480">`;
  return (emptyPageRef.innerHTML = markup);
}

checkLocalStorage();
