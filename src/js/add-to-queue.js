import { renderLibraryCrads } from './renderLibraryCrads';
import { clearContent } from './add-to-watched';
// import { renderEmptyImage } from './empty-page';
import { checkLocalStorage } from './empty-page';

const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');

queueBtn.addEventListener('click', onQueueBtnClick);

async function onQueueBtnClick() {
  queueBtn.classList.add('is-active');
  watchedBtn.classList.remove('is-active');
  clearContent();

  try {
    const queue = JSON.parse(localStorage.getItem('queue'));
    if (!queue) {
      const emptyRef = document.querySelector('.empty-page');
      emptyRef.innerHTML = '';
      checkLocalStorage();
    }
    renderLibraryCrads(queue);
  } catch (error) {
    console.log(error);
  }
}