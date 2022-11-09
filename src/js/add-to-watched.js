import { renderLibraryCrads } from './renderLibraryCrads';
import { checkLocalStorage, renderEmptyImage } from './empty-page';

const watchedBtn = document.querySelector('.watched-btn');
const galleryRef = document.querySelector('.gallery');
const queueBtn = document.querySelector('.queue-btn');
const emptyRef = document.querySelector('.main-library__empty-page');

watchedBtn.addEventListener('click', onWatchedBtnClick);

async function onWatchedBtnClick() {
  clearContent();
  watchedBtn.classList.add('is-active');
  queueBtn.classList.remove('is-active');
  try {
    const watched = localStorage.getItem('watched');
    if (watched === null) {
      emptyRef.innerHTML = '';
      checkLocalStorage();
      return;
    }
    const parseWatched = JSON.parse(watched);
    emptyRef.innerHTML = '';

    renderLibraryCrads(parseWatched);
    return;
  } catch (error) {
    console.log(error);
  }
}
export function clearContent() {
  galleryRef.innerHTML = '';
}
