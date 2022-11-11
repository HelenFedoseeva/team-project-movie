import { renderLibraryCrads } from './renderLibraryCrads';
import { checkLocalStorage, renderEmptyImage } from './empty-page';

const watchedBtn = document.querySelector('.watched-btn');
const galleryRef = document.querySelector('.gallery');
const queueBtn = document.querySelector('.queue-btn');
const emptyRef = document.querySelector('.main-library__empty-page');
const popcornImg = document.querySelector('.empty-page__img');

watchedBtn.addEventListener('click', onWatchedBtnClick);

async function onWatchedBtnClick() {
  clearContent();
  watchedBtn.classList.add('is-active');
  queueBtn.classList.remove('is-active');
  try {
    const watched = JSON.parse(localStorage.getItem('watched'));
    if (!watched || watched.length === 0) {
      // emptyRef.innerHTML = '';
      checkLocalStorage();
      return;
    } else if (popcornImg.classList.contains('hide')) {
      // const parseWatched = JSON.parse(watched);
      emptyRef.innerHTML = '';
      renderLibraryCrads(watched);
      return;
    }
    popcornImg.classList.toggle('hide');
    // const parseWatched = JSON.parse(watched);
    emptyRef.innerHTML = '';

    renderLibraryCrads(watched);
    return;
  } catch (error) {
    console.log(error);
  }
}
export function clearContent() {
  galleryRef.innerHTML = '';
}
