// import { movies } from './test-api';

// const cardListEl = document.querySelector('.gallery');
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

/* fechCards().then(resp => {
  console.log(resp);
  renderCards(resp);
}); */

function createCards(movies) {
  const results = movies;
  return results
    .map(
      ({ poster_path, title, release_date }) =>
        `<li class="movie-card">
      <img src="${IMAGE_URL}${poster_path}" alt="${title} class="movie-card-img""/>
      <div class="movie-info">
      <p class="movie-title">${title}</p>
      <p class="film-cards__title movie-genres">Жанры когда будут | ${release_date.slice(
        0,
        4
      )}</p> 
      </div>
    </li>`
    )
    .join('');
}

export function renderCards(data, querySelector) {
  querySelector.insertAdjacentHTML('beforeend', createCards(data));
  // console.log(data);
}

// renderCards();
