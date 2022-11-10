import getGenres from './get-genres';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function createCards(movies) {
  const { results } = movies;
  return results
    .map(({ poster_path, title, release_date, id, genre_ids }) => {
      let genre = getGenres(genre_ids);
      if (genre === '') {
        genre = 'unknown';
      }
      if (release_date === '') {
        release_date = 'none';
      }
      return `<li class="movie-card">
      <img src="${IMAGE_URL}${poster_path}" alt="${title}" class="movie-card-img" data-id="${id}" loading="lazy"/>
      <div class="movie-info">
      <p class="movie-title">${title}</p>
      <p class="film-cards__title movie-genres">${genre} | ${release_date.slice(
        0,
        4
      )}</p> 
      </div>
    </li>`;
    })
    .join('');
}

export function renderCards(data, querySelector) {
  /* querySelector.insertAdjacentHTML('beforeend', createCards(data)); */
  querySelector.innerHTML = createCards(data);
}
