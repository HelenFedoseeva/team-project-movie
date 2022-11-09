import { renderLibraryCrads } from './renderLibraryCrads';

const watchedBtn = document.querySelector('.watched-btn');
const galleryRef = document.querySelector('.gallery');
const queueBtn = document.querySelector('.queue-btn');

watchedBtn.addEventListener('click', onWatchedBtnClick);

async function onWatchedBtnClick() {
    clearContent();
    watchedBtn.classList.add('is-active');
    queueBtn.classList.remove('is-active');
    try {
        const watched = localStorage.getItem('watched');
        const parseWatched = JSON.parse(watched);
        renderLibraryCrads(parseWatched);
    } catch (error) {
        console.log(error);
    }
}
export function clearContent() {
    galleryRef.innerHTML = '';
}
