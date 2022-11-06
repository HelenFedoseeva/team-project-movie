import { modalCardRender } from './modalCardRender';
import { getMovie } from './movieById';
// import { addListenerByBtns } from './adding-watched-movies';

const filmCardsRef = document.querySelector('.gallery');
const backdropRef = document.querySelector('.backdrop');

filmCardsRef.addEventListener('click', onFilmCardsClick);

function onFilmCardsClick(e) {
  e.preventDefault();

  if (e.target.nodeName === 'IMG') {
    const movieId = e.target.dataset.id;

    openModal(movieId);
  }
}

async function openModal(movieId) {
  backdropRef.classList.remove('is-hidden');

  const movie = await getMovie(movieId);

  modalCardRender(movie.data);
  // addListenerByBtns(movie);
}
