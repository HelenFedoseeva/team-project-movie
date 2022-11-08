import { renderLibraryCrads } from './renderLibraryCrads';

const watchedBtn = document.querySelector('.watched-btn');
<<<<<<< Updated upstream
const galleryRef = document.querySelector('.gallery');

console.log(watchedBtn)
=======
const queueBtn = document.querySelector('.queue-btn');
const myLibraryGalleryRef = document.querySelector('.my-library-gallery');
>>>>>>> Stashed changes

watchedBtn.addEventListener('click', onWatchedBtnClick);

async function onWatchedBtnClick() {
<<<<<<< Updated upstream

    //clearContent();
    currentPage = 1;
    try {
        const watched = localStorage.getItem('watched');
        const parseWatched = JSON.parse(watched);
        console.log(parseWatched.results)
        renderCards(parseWatched.results, galleryRef);
=======
    clearContent();
    watchedBtn.classList.add('is-active');
    queueBtn.classList.remove('is-active');
    try {
        const watched = JSON.parse(localStorage.getItem('watched'));
        renderLibraryCrads(watched, myLibraryGalleryRef);
>>>>>>> Stashed changes
    }
    catch (error) {
        console.log(error);
    }
<<<<<<< Updated upstream
=======
}
export function clearContent() {
    myLibraryGalleryRef.innerHTML = '';
>>>>>>> Stashed changes
}