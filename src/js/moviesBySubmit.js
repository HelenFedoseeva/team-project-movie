import { fechMuviQueri } from './fetch';
import { renderCards } from './render-cards';
import './renderPagination';
import { currentPaginationPage, rendernPagination } from './renderPagination';

const form = document.querySelector('form');
const movies_list = document.querySelector('.gallery');
let currentPage = currentPaginationPage;
let totalResults = null;
let numberPerPage = null;
let totalPages = null;
let thisQuery = '';

form.addEventListener('submit', onSubmitForm);
async function onSubmitForm(e) {
  e.preventDefault();
  clearContent();
  thisQuery = e.target.elements.input.value.trim();
  fetchMovie(thisQuery);
}

export async function fetchMovie(query) {
  clearContent();
  if (thisQuery === '') {
    return;
  }
  try {
    const response = await fechMuviQueri(query, currentPaginationPage);
    totalResults = response.total_results;
    numberPerPage = response.results.length;
    totalPages = response.total_pages;

    renderCards(response, movies_list);
    rendernPagination(totalResults, query);
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
