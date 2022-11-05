import { FetchMovie } from './js/fetch';
import { fechMuviQueri } from './js/fetch';
import { renderCards } from './js/render-cards';
// import { API_KEY, URL } from './js/fetch';
import './js/open-modal';



import './js/renderPagination';
import './js/adding-watched-movies';

const form = document.querySelector('form');
const movies_list = document.querySelector('.gallery');
let currentPage = 1;
let totalResults = null;
let numberPerPage = null;
let totalPages = null;

form.addEventListener('submit', onSubmitForm);
async function onSubmitForm(e) {
  e.preventDefault();
  clearContent();
  currentPage = 1;
  const query = e.target.elements.input.value.trim();
  try {
    const response = await fechMuviQueri(query, currentPage);
    const fetchData = response.results;
    totalResults = response.total_results;
    numberPerPage = response.results.length;
    totalPages = response.total_pages;
    console.log(totalPages);
    console.log(fetchData);

    renderCards(fetchData, movies_list);
  } catch (error) {
    console.log(error);
  }
  // if (!query) {
  //     return console.log('The search string cannot be empty. Please specify your search query')
  // }
}

function clearContent() {
  movies_list.innerHTML = '';
}
import './js/moviesBySubmit';
