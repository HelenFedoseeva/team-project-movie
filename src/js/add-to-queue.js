import { renderLibraryCrads } from './renderLibraryCrads';
import { clearContent } from './add-to-watched';
// import { renderEmptyImage } from './empty-page';
import { checkLocalStorage } from './empty-page';
import { prependOnceListener } from 'process';

const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');
const popcornImg = document.querySelector('.empty-page__img');
const emptyDiv = document.querySelector('.main-library__empty-page');

queueBtn.addEventListener('click', onQueueBtnClick);

async function onQueueBtnClick() {
  queueBtn.classList.add('is-active');
  watchedBtn.classList.remove('is-active');
  clearContent();

  try {
    const queue = JSON.parse(localStorage.getItem('queue'));

    if (!queue || queue.length === 0) {
      // const emptyRef = document.querySelector('.empty-page');
      // emptyRef.innerHTML = '';
      checkLocalStorage();
      return;
    } else if (queue.length !== 0) {
      if (popcornImg.classList.contains('hide')) {
        renderLibraryCrads(queue);
        return;
      }
      popcornImg.classList.add('hide');
      emptyDiv.innerHTML = '';
      renderLibraryCrads(queue);
      return;
    }
    // emptyRef.innerHTML = '';
  } catch (error) {
    console.log(error);
  }
}
