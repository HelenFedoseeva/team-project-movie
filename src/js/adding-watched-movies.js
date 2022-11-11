import { doc } from '@firebase/firestore';

export { addListenerByBtns };
function addListenerByBtns(movie) {
  const btns = document.querySelector('.btns-box');
  btns.addEventListener('click', onBtnsClick.bind(this, movie));

  const btnW = document.querySelector('button[data-add="watched"]');
  const btnQ = document.querySelector('button[data-add="queue"]');

  const watched = JSON.parse(localStorage.getItem('watched')).map(
    ({ data }) => data.id
  );
  const queue = JSON.parse(localStorage.getItem('queue')).map(
    ({ data }) => data.id
  );
  if (watched.includes(movie.data.id)) {
    btnW.textContent = 'remove from watched';
  }
  if (queue.includes(movie.data.id)) {
    btnQ.textContent = 'remove from queue';
  }
}

function onBtnsClick(movie, event) {
  if (event.target.textContent === 'remove from watched') {
    checkLocalStorageRem(movie, 'watched');
    return;
  }
  if (event.target.textContent === 'remove from queue') {
    checkLocalStorageRem(movie, 'queue');
    return;
  }
  if (event.target.dataset.add === 'watched') {
    checkLocalStorage(movie, 'watched');
  }

  if (event.target.dataset.add === 'queue') {
    checkLocalStorage(movie, 'queue');
  }
}

function checkLocalStorageRem(movie, key) {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(`${key}`));
  const index = keyFromLocalStorage.findIndex(
    ({ data: { id } }) => movie.data.id === id
  );
  keyFromLocalStorage.splice(index, 1);
  addLocalStorage(keyFromLocalStorage, `${key}`);
  const button = document.querySelector(`button[data-add="${key}"]`);
  button.textContent = `removed from ${key}`;
}

function checkLocalStorage(movie, key) {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(`${key}`));

  if (!keyFromLocalStorage) {
    addLocalStorage([movie], `${key}`);
    const button = document.querySelector(`button[data-add="${key}"]`);
    button.textContent = `Remove from ${key}`;
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
