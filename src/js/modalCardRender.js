const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const modalRef = document.querySelector('.modal');

export { modalCardRender };

function modalCardRender({
  poster_path,
  title,
  vote_average,
  popularity,
  vote_count,
  original_title,
  genres,
  overview,
}) {
  let movieGenres = genres.map(genre => genre.name).join(',');
  if (movieGenres === '') {
    movieGenres = 'unknown';
  }
  let markup = `
  <div class="wrapper">
    <div class="image">
      <img class='poster' src="${IMAGE_URL}${poster_path}" alt="${title}" />
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
        <ul class="list list__width">
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
   <div class="btns-box">
   <button type="button" class="btns-box__btn is-active" data-add="watched">
     add to Watched
   </button>
   <button type="button" class="btns-box__btn" data-add="queue">
     add to queue
   </button>
 </div>
 </div>
 
    </div>
`;

  // let markup = null;

  if (document.body.dataset.page === 'main') {
    markup = `
    <div class="wrapper">
      <div class="image">
        <img class='poster' src="${IMAGE_URL}${poster_path}" alt="${title}" />
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
     <div class="btns-box">
     <button type="button" class="btns-box__btn is-active" data-add="watched">
      add to watched
     </button>
     <button type="button" class="btns-box__btn" data-add="queue">
      add to queue
     </button>
   </div>
   </div>

      </div>
  `;
  }

  if (document.body.dataset.page === 'library') {
    markup = `
    <div class="wrapper">
      <div class="image">
        <img class='poster' src="${IMAGE_URL}${poster_path}" alt="${title}" />
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
          <ul class="list list__width">
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
     <div class="btns-box">
     <button type="button" class="btns-box__btn is-active" data-add="watched">
      Remove from watched
     </button>
     <button type="button" class="btns-box__btn" data-add="queue">
        Remove from queue
     </button>
   </div>
   </div>

      </div>
  `;
  }

  modalRef.insertAdjacentHTML('beforeend', markup);
}
