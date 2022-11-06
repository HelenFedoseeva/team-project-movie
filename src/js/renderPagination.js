import './pagination';
import './moviesBySubmit';
// import { fetchMovie } from './moviesBySubmit';

//необходимые переменные
export let currentPaginationPage = 1;
//

export function rendernPagination(total, query) {
  $(`#pagination`).pagination({
    total: total,
    current: currentPaginationPage,
    length: 20,
    size: 2,
    prev: '&lt;',
    next: '&gt;',
    click: async function (e) {
      currentPaginationPage = e.current;
      await fetchMovie(query);
    },
  });
}

// вызов функции
// rendernPagination(totalResults, currentPage);
//

// прослушка
// const pagination = document.querySelector('#pagination');
// pagination.addEventListener('click', e => {
//   console.log(e.target.getAttribute('data-page'));
// });
