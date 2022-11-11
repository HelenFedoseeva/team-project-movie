import { doc } from '@firebase/firestore';
import { renderLibraryCrads } from './renderLibraryCrads';

export { addListenerByBtns };
function addListenerByBtns(movie) {
  const btns = document.querySelector('.btns-box');

  const btnW = document.querySelector('button[data-add="watched"]');
  const btnQ = document.querySelector('button[data-add="queue"]');

  const watched = JSON.parse(localStorage.getItem('watched'));
  if (watched) {
    const w = watched.map(({ data }) => data.id);
    if (w.includes(movie.data.id)) {
      btnW.textContent = 'remove from watched';
    }
  }

  const queue = JSON.parse(localStorage.getItem('queue'));

  if (queue) {
    const q = queue.map(({ data }) => data.id);
    if (q.includes(movie.data.id)) {
      btnQ.textContent = 'remove from queue';
    }
  }
  btns.addEventListener('click', onBtnsClick.bind(this, movie));
}

function onBtnsClick(movie, event) {
  if (event.target.textContent === 'remove from watched') {
    removeMovie(movie, 'watched');
    const watched = JSON.parse(localStorage.getItem('watched'));

    renderLibraryCrads(watched);
    return;
  }
  if (event.target.textContent === 'remove from queue') {
    removeMovie(movie, 'queue');
    const queue = JSON.parse(localStorage.getItem('queue'));

    renderLibraryCrads(queue);
    return;
  }

  if (event.target.textContent === 'add to queue') {
    checkLocalStorage(movie, 'queue');
  }

  if (event.target.textContent === 'add to watched') {
    checkLocalStorage(movie, 'watched');
    const watched = JSON.parse(localStorage.getItem('watched'));
    renderLibraryCrads(watched);
  }
}

function removeMovie(movie, key) {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(`${key}`));
  const index = keyFromLocalStorage.findIndex(
    ({ data: { id } }) => movie.data.id === id
  );
  keyFromLocalStorage.splice(index, 1);
  addLocalStorage(keyFromLocalStorage, `${key}`);
  const button = document.querySelector(`button[data-add="${key}"]`);
  button.textContent = `add to ${key}`;
}

function checkLocalStorage(movie, key) {
  const keyFromLocalStorage = JSON.parse(localStorage.getItem(`${key}`));

  if (!keyFromLocalStorage) {
    addLocalStorage([movie], `${key}`);
    const button = document.querySelector(`button[data-add="${key}"]`);
    button.textContent = `remove from ${key}`;
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
  button.textContent = `remove from ${key}`;
}

function addLocalStorage(arr, key) {
  localStorage.setItem(`${key}`, JSON.stringify(arr));
}
