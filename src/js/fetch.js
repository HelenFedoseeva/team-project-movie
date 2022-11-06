import { movies } from './test-api';
const axios = require('axios').default;
const API_KEY = 'api_key=341a3443d9168179889e844c5b12f774';
const URL_TREND = 'https://api.themoviedb.org/3/trending/movie/week';
const URL_QUERY = 'https://api.themoviedb.org/3/search/movie';

// const URL_ID = `https://api.themoviedb.org/3/movie/${movie_id}`;

export { fechMuviQueri };
async function fechMuviQueri(query, page) {
  const FILTER = `&query=${query}&page=${page}&language=en-US`;
  return await axios
    .get(`${URL_QUERY}?${API_KEY}${FILTER}`)
    .then(response => response.data);
}

export default async function fechMuviTrend(page) {
  const PAGE = `&page=${page}`;
  return await axios
    .get(`${URL_TREND}?${API_KEY}${PAGE}`)
    .then(response => response.data);
}
