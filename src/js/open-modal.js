import { modalCardRender } from './modalCardRender';
import { getMovie } from './movieById';
import { addListenerByBtns } from './adding-watched-movies';

import { renderLibraryCrads } from './renderLibraryCrads';

const filmCardsRef = document.querySelector('.gallery');
const backdropRef = document.querySelector('.backdrop');
const modalRef = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-btn');

filmCardsRef.addEventListener('click', onFilmCardsClick);

function onFilmCardsClick(e) {
  e.preventDefault();

  document.addEventListener('keydown', onEscTap);
  backdropRef.addEventListener('click', onClickCloseBtnOrOutside);
  modalCloseBtn.addEventListener('click', onClickCloseBtnOrOutside);

  if (e.target.nodeName === 'IMG') {
    const movieId = e.target.dataset.id;

    openModal(movieId);
  }
}

async function openModal(movieId) {
  backdropRef.classList.remove('is-hidden');

  const movie = await getMovie(movieId);

  modalCardRender(movie.data);
  addListenerByBtns(movie);
}

function onEscTap(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function onClickCloseBtnOrOutside(e) {
  if (
    e.currentTarget.classList.value === 'modal-btn' ||
    e.target.classList.value === 'backdrop'
  ) {
    closeModal();
  }
}

function closeModal() {
  backdropRef.classList.toggle('is-hidden');
  document.removeEventListener('keydown', onEscTap);
  backdropRef.removeEventListener('click', onClickCloseBtnOrOutside);
  const wrapper = document.querySelector('.wrapper');
  wrapper.remove();
  const movies = JSON.parse(localStorage.getItem('watched'));
  const movieQ = JSON.parse(localStorage.getItem('queue'));
  if (document.body.dataset.page === 'library') {
    renderLibraryCrads(movieQ);
    renderLibraryCrads(movies);
  }
}
