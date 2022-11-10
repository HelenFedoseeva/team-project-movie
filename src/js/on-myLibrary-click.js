import { checkLocalStorage, renderEmptyImage } from './empty-page';
import { renderLibraryCrads } from './renderLibraryCrads';
import { clearContent } from './add-to-watched';

// const myLibraryLink = document.querySelector('.library-link');
// console.log(myLibraryLink)
//myLibraryLink.addEventListener('click', onLibraryClickHandler);

const watched = localStorage.getItem('watched');
const queue = localStorage.getItem('queue');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');

export function onLibraryClickHandler() {
  //evt.preventDefault();
  watchedBtn.classList.add('is-active');
  try {
    if (!watched) {
      checkLocalStorage();
      return;
    } else if (watched) {
      clearContent();
      // watchedBtn.classList.add('is-active');
      const parseWatched = JSON.parse(watched);
      renderLibraryCrads(parseWatched);
      // const emptyDiv = document.querySelector('.empty-page');
      // emptyDiv.innerHTML = '';
      return;
    }
    // else if (queue) {
    //   clearContent();
    //   queueBtn.classList.add('is-active');
    //   const parseQueue = JSON.parse(queue);

    //   renderLibraryCrads(parseQueue);
    //   return;
    // }
    // if (watched) {
    //   clearContent();
    //   // watchedBtn.classList.add('is-active');
    //   const parseWatched = JSON.parse(watched);
    //   console.log(parseWatched);
    //   renderLibraryCrads(parseWatched);
    //   // const emptyDiv = document.querySelector('.empty-page');
    //   // emptyDiv.innerHTML = '';
    //   return;
    // } else if (queue) {
    //   clearContent();
    //   queueBtn.classList.add('is-active');
    //   const parseQueue = JSON.parse(queue);

    //   renderLibraryCrads(parseQueue);
    //   return;
    // } else if (watched === null || queue === null) {
    //   renderEmptyImage();
    // }
  } catch (error) {
    console.log(error);
  }
}
onLibraryClickHandler();
