export { addListenerByBtns };
function addListenerByBtns(movie) {
  const btns = document.querySelector('.btns-box');
  btns.addEventListener('click', onBtnsClick.bind(this, movie));
}

function onBtnsClick(movie, event) {
  if (event.target.dataset.add === 'watched') {
    checkLocalStorage(movie, 'watched');
  }

  if (event.target.dataset.add === 'queue') {
    checkLocalStorage(movie, 'queue');
  }
}

function checkLocalStorage(movie, key) {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(`${key}`));

  if (!keyFromLocalStorage) {
    addLocalStorage([movie], `${key}`);
    const button = document.querySelector(`button[data-add="${key}"]`);
    button.textContent = `already added to ${key}`;
    return;
  }

  const film = keyFromLocalStorage.find(
    ({ data: { id } }) => movie.data.id === id
  );

  if (!film) {
    keyFromLocalStorage.push(movie);
    addLocalStorage(keyFromLocalStorage, `${key}`);
  }

  const button = document.querySelector(`button[data-add="${key}"]`);
  button.textContent = `already added to ${key}`;
}

function addLocalStorage(arr, key) {
  localStorage.setItem(`${key}`, JSON.stringify(arr));
}
