const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const modalWrapperRef = document.querySelector('.wrapper');
const btnsRef = document.querySelector('.btns-box');

export { modalCardRender };

function modalCardRender({
  id,
  poster_path,
  title,
  vote_average,
  popularity,
  vote_count,
  original_title,
  genres,
  overview,
}) {
  const movieGenres = genres.map(genre => genre.name).join(',');
  btnsRef.setAttribute('data-id', `${id}`);
  const markup = `
    <div class="image">
      <img src="${IMAGE_URL}${poster_path}" alt="${title}" />
    </div>

    <div class="wrapper__text">
      <h2 class="wrapper__title">${title}</h2>
       <div class="wrapper__info">
        <ul class="list">
          <li class="list__item">
           <p class="list__item-text">Vote / Votes</p>
          </li>
          <li class="list__item">
           <p class="list__item-text">Original Title</p>
          </li>
          <li class="list__item">
           <p class="list__item-text">Original Title</p>
          </li>
          <li class="list__item">
           <p class="list__item-text">Genre</p>
          </li>
        </ul>
        <ul class="list list_width">
          <li class="list__item">
           <p class="list__item-elem">
             <span class="active">${vote_average}</span> / ${vote_count}
           </p>
          </li>
          <li class="list__item">
           <p class="list__item-elem">${popularity}</p>
          </li>
          <li class="list__item">
           <p class="list__item-elem">${original_title}</p>
          </li>
          <li class="list__item">
           <p class="list__item-elem">${movieGenres}</p>
          </li>
        </ul>
   </div>

   <p class="text">About</p>
   <p class="paragraph">${overview}</p>
  
 </div>
`;
  modalWrapperRef.insertAdjacentHTML('beforeend', markup);
}
