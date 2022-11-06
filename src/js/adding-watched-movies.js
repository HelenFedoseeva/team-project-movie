import { movie } from './open-modal';

// const btns = document.querySelector('.btns-box');

// btns.addEventListener('click', onBtnsClick);

const watched = [];
const queue = [];

function onBtnsClick(event) {
  if (event.target.dataset.add === 'watched') {
    watched.push(movie);
    const movies = JSON.stringify(watched);

    localStorage.setItem('watched', movies);
  }

  if (event.target.dataset.add === 'queue') {
    queue.push(movie);
    const movies = JSON.stringify(queue);

    localStorage.setItem('queue', movies);
  }
}
