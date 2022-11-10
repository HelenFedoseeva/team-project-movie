import addToWatched from './add-to-wached-fire';
import addToQueue from './add-to-queue-fire';
export { addListenerByBtns };
function addListenerByBtns(movie) {
  const btns = document.querySelector('.btns-box');
  btns.addEventListener('click', onBtnsClick.bind(this, movie));
}

function onBtnsClick(movie, event) {
  if (event.target.dataset.add === 'watched') {
    const button = document.querySelector(`button[data-add="watched"]`);
    addToWatched(movie);
  }

  if (event.target.dataset.add === 'queue') {
    addToQueue(movie);
  }
}
