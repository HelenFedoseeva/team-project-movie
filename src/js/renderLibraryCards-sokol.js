export function renderLibraryCrads(movies) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const galleryRef = document.querySelector('.gallery');

  const markup = movies
    .map(movie => {
      console.log(movie);
      const { poster_path, genres, title, id, release_date } = movie;
      return `<li class="movie-card">
      <img src="${IMAGE_URL}${poster_path}" alt="${title} class="movie-card-img" data-id='${id}'/>
      <div class="movie-info">
      <p class="movie-title">${title}</p>
      <p class="film-cards__title movie-genres">${genres[0].name}, ${
        genres[1].name
      } | ${release_date.slice(0, 4)}</p>
      </div>
    </li>`;
    })
    .join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
}
