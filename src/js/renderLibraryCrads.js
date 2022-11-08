export function renderLibraryCrads(movies) {
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    const myLibraryGalleryRef = document.querySelector('.my-library-gallery');

    const markup = movies
        .map(movie => {
            const data = movie.data;
            const { poster_path, genres, title, release_date } = data;
            return `<li class="movie-card">
      <img src="${IMAGE_URL}${poster_path}" alt="${title} class="movie-card-img"/>
      <div class="movie-info">
      <p class="movie-title">${title}</p>
      <p class="film-cards__title movie-genres">${genres[0].name}, ${genres[1].name} | ${release_date.slice(0, 4)}</p>
      </div>
    </li>`;
        })
        .join('');
    myLibraryGalleryRef.insertAdjacentHTML('beforeend', markup);
}