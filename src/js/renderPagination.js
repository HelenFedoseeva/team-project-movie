import './pagination';

//необходимые переменные
let currentPage = 1;
let totalResults = 500;
//

export function rendernPagination(total, current) {
  $(`#pagination`).pagination({
    total: total,
    current: current,
    length: 20,
    size: 2,
    prev: '&lt;',
    next: '&gt;',
  });
}

// вызов функции
rendernPagination(totalResults, currentPage);
//

// прослушка
const pagination = document.querySelector('#pagination');
pagination.addEventListener('click', e => {
  console.log(e.target.getAttribute('data-page'));
});
