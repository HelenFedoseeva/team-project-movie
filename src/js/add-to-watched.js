import { renderCards } from './render-cards';

const watchedBtn = document.querySelector('.watched-btn');
const galleryRef = document.querySelector('.gallery');

console.log(watchedBtn);

watchedBtn.addEventListener('click', onWatchedBtnClick);

async function onWatchedBtnClick() {
  //clearContent();
  currentPage = 1;
  try {
    const watched = localStorage.getItem('watched');
    const parseWatched = JSON.parse(watched);
    console.log(parseWatched.results);
    renderCards(parseWatched.results, galleryRef);
  } catch (error) {
    console.log(error);
  }
}
