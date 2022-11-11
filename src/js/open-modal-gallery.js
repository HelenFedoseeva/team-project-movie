import { modalCardRender } from './modalCardRender';
import { getMovie } from './movieById';
import { addListenerByBtns } from './adding-watched-movies';

import { renderLibraryCrads } from './renderLibraryCrads';

const filmCardsRef = document.querySelector('.gallery');
const backdropRef = document.querySelector('.backdrop');
const modalRef = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-btn');
const watchedBtn = document.querySelector('.watched-btn');
const galleryRef = document.querySelector('.gallery');
const queueBtn = document.querySelector('.queue-btn');
const moviesWtc = JSON.parse(localStorage.getItem('watched'));
const moviesQue = JSON.parse(localStorage.getItem('queue'));

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
  // const btnW = document.querySelector('button[data-add="watched"]');
  // const btnQ = document.querySelector('button[data-add="queue"]');
  backdropRef.classList.remove('is-hidden');

  const movie = await getMovie(movieId);

  modalCardRender(movie.data);
  addListenerByBtns(movie);

  // const btns = document.querySelector('.btns-box');

  // btns.addEventListener('click', e => {
  //   console.log('click');
  //   if (queueBtn.classList.contains('is-active')) {
  //     renderLibraryCrads(moviesQue);
  //   }

  //   if (watchedBtn.classList.contains('is-active')) {
  //     renderLibraryCrads(moviesWtc);
  //   }
  // });
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
  refreshGallery();
}

function refreshGallery() {
  const watchedBtn = document.querySelector('.watched-btn');
  const galleryRef = document.querySelector('.gallery');
  const queueBtn = document.querySelector('.queue-btn');
  const moviesWtc = JSON.parse(localStorage.getItem('watched'));
  const moviesQue = JSON.parse(localStorage.getItem('queue'));
  if (queueBtn.classList.contains('is-active')) {
    renderLibraryCrads(moviesQue);
  }

  if (watchedBtn.classList.contains('is-active')) {
    renderLibraryCrads(moviesWtc);
  }
}
