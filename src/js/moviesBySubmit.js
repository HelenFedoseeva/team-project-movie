import { fechMuviQueri } from './fetch';
import { renderCards } from './render-cards';
import { loaderShow, loaderHide } from './loader';
import './pagination';

const form = document.querySelector('form');
const movies_list = document.querySelector('.gallery');
const textOutput = document.querySelector('.form__text');
let currentPage = 1;
let totalResults = null;
let thisQuery = '';

form.addEventListener('submit', onSubmitForm);
async function onSubmitForm(e) {
  e.preventDefault();
  currentPage = 1;
  thisQuery = e.target.elements.input.value.trim();
  console.log(thisQuery);
  if (!thisQuery) {
    textOutput.classList.remove('hidden');
    setTimeout(() => {
      textOutput.classList.add('hidden');
    }, 3000);
    return;
  }

  loaderShow();
  fetchMoviebyQueri(thisQuery);
  setTimeout(loaderHide, 250);
}
async function fetchMoviebyQueri(query) {
  //clearContent();
  try {
    const response = await fechMuviQueri(query, currentPage);
    totalResults = response.total_results;
    if (response.results.length === 0) {
      textOutput.classList.remove('hidden');
      setTimeout(() => {
        textOutput.classList.add('hidden');
      }, 3000);
      return;
    }

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
    prev: '&lt',
    next: '&gt',
    click: async function (e) {
      currentPage = e.current;
      await fetchMoviebyQueri(thisQuery);
    },
  });
}

function clearContent() {
  movies_list.innerHTML = '';
}
