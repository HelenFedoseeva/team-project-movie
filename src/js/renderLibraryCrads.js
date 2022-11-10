export function renderLibraryCrads(movies) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const galleryRef = document.querySelector('.gallery');

  const markup = movies
    .map(movie => {
      const data = movie.data;
      let { poster_path, genres, title, id, release_date } = data;
      genres = getGenres(genres);
      if (genres === '') {
        genres = 'unknown';
      }
      return `<li class="movie-card">
      <img src="${IMAGE_URL}${poster_path}" alt="${title} class="movie-card-img" data-id='${id}'/>
      <div class="movie-info">
      <p class="movie-title">${title}</p>
      <p class="film-cards__title movie-genres">${genres} | ${release_date.slice(
        0,
        4
      )}</p>
      </div>
    </li>`;
    })
    .join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
}

function getGenres(genres) {
  genres = genres.map(genre => genre.name);
  if (genres.length > 2) {
    genres.splice(2, 5, 'Other');
  }
  return genres.join(', ');
}
