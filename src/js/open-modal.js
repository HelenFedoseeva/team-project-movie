// import { renderCard } from './render-card';
// import {fetchMovieById} from 'fetchMoviesById'

const filmCardsRef = document.querySelector('.gallery');
const backdropRef = document.querySelector('.backdrop');

filmCardsRef.addEventListener('click', onFilmCardsClick);

function onFilmCardsClick(e) {
  e.preventDefault();

  if (e.target.nodeName === 'IMG') {
    const movieId = e.target.dataset.id;

    backdropRef.classList.remove('is-hidden');
    const movie = fetchMovieById(movieId);
    renderCard(movie);
  }
}
