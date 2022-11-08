import { renderLibraryCrads } from './renderLibraryCrads';
import { clearContent } from './add-to-watched';

const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');


queueBtn.addEventListener('click', onQueueBtnClick);

async function onQueueBtnClick() {
    queueBtn.classList.add('is-active');
    watchedBtn.classList.remove('is-active');
    clearContent();

    try {
        const queue = JSON.parse(localStorage.getItem('queue'));
        renderLibraryCrads(queue);
    }
    catch (error) {
        console.log(error);
    }
}
