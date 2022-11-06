import { renderCards } from './render-cards';
import fechMuviTrend from './fetch';
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
    prev: '&lt;',
    next: '&gt;',
    click: function (e) {
      currentPage = e.current;
      fetchMovieByRating();
    },
  });
}

function clearContent() {
  movies_list.innerHTML = '';
}

fetchMovieByRating();
