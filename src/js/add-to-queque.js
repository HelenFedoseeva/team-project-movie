import { renderCards } from './render-cards';

const quequeBtn = document.querySelector('.queque-btn');
const galleryRef = document.querySelector('.gallery');

console.log(quequeBtn)

quequeBtn.addEventListener('click', onQuequeBtnClick);

async function onQuequeBtnClick() {

    //clearContent();
    currentPage = 1;
    try {
        const queque = localStorage.getItem('queque');
        const parseQueque = JSON.parse(queque);
        console.log(parseQueque.results)
        renderCards(parseQueque.results, galleryRef);
    }
    catch (error) {
        console.log(error);
    }
}