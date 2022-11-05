import { movies } from './test-api';

const cardListEl = document.querySelector('.gallery');
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

/* fechCards().then(resp => {
  console.log(resp);
  renderCards(resp);
}); */

function createCards() {
  const { results } = movies;
  return results
    .map(
      ({ poster_path, title, release_date }) =>
        `<li class="movie-card">
      <img src="${IMAGE_URL}${poster_path}" alt="${title} class="movie-card-img""/>
      <p class="movie-title">${title}</p>
      <p class="film-cards__title">Жанры когда будут| ${release_date.slice(
        0,
        4
      )}</p>
    </li>`
    )
    .join('');
}

function renderCards() {
  cardListEl.insertAdjacentHTML('beforeend', createCards());
}

renderCards();
