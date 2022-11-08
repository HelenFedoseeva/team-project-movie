import { renderLibraryCrads } from './renderLibraryCrads';
import { clearContent } from './add-to-watched';

const queueBtn = document.querySelector('.queue-btn');
const watchedBtn = document.querySelector('.watched-btn');
const myLibraryGalleryRef = document.querySelector('.my-library-gallery');

queueBtn.addEventListener('click', onQueueBtnClick);

async function onQueueBtnClick() {
    queueBtn.classList.add('is-active');
    watchedBtn.classList.remove('is-active');
    clearContent();

    try {
        const queue = JSON.parse(localStorage.getItem('queue'));
        renderLibraryCrads(queue, myLibraryGalleryRef);
    }
    catch (error) {
        console.log(error);
    }
}
