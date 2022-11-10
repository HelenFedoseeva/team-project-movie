import { renderCards } from './render-cards';
import fechMuviTrend from './fetch';
import { loaderShow, loaderHide } from './loader';
import './pagination';

const movies_list = document.querySelector('.gallery');
let currentPage = 1;
let totalResults = null;
let thisQuery = '';

async function fetchMovieByRating() {
  clearContent();
  try {
    const response = await fechMuviTrend(currentPage);
    totalResults = response.total_results;
    renderCards(response, movies_list);
  } catch (error) {
    console.log(error);
  }
  $(`#pagination`).pagination({
    total: totalResults,
    current: currentPage,
    length: 20,
    size: 2,
    prev: '🡠',
    next: '🡢',
    click: function (e) {
      currentPage = e.current;
      loaderShow();
      fetchMovieByRating();
      setTimeout(loaderHide, 250);
    },
  });
}

function clearContent() {
  movies_list.innerHTML = '';
}

loaderShow();
fetchMovieByRating();
setTimeout(loaderHide(), 250);
