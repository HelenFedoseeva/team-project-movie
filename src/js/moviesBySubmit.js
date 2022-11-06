import { fechMuviQueri } from './fetch';
import { renderCards } from './render-cards';
import './pagination';

const form = document.querySelector('form');
const movies_list = document.querySelector('.gallery');
let currentPage = 1;
let totalResults = null;
let thisQuery = '';

form.addEventListener('submit', onSubmitForm);
async function onSubmitForm(e) {
  e.preventDefault();
  clearContent();
  currentPage = 1;
  thisQuery = e.target.elements.input.value.trim();
  fetchMoviebyQueri(thisQuery);
}
async function fetchMoviebyQueri(query) {
  clearContent();
  if (thisQuery === '') {
    return;
  }
  try {
    const response = await fechMuviQueri(query, currentPage);
    totalResults = response.total_results;
    numberPerPage = response.results.length;
    totalPages = response.total_pages;

    renderCards(response, movies_list);
  } catch (error) {
    console.log(error);
  }
  // if (!query) {
  //     return console.log('The search string cannot be empty. Please specify your search query')
  // }

  $(`#pagination`).pagination({
    total: totalResults,
    current: currentPage,
    length: 20,
    size: 2,
    prev: '&lt;',
    next: '&gt;',
    click: async function (e) {
      currentPage = e.current;
      await fetchMoviebyQueri(thisQuery);
    },
  });
}
function clearContent() {
  movies_list.innerHTML = '';
}
