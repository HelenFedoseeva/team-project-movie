import axios from 'axios';
export { getMovie };
const API_KEY = 'api_key=341a3443d9168179889e844c5b12f774';
const BASE_URL_MOVIE = 'https://api.themoviedb.org/3/movie/';

async function getMovie(id) {
  try {
    return (response = await axios.get(`${BASE_URL_MOVIE}${id}?${API_KEY}`));
  } catch (error) {
    console.error(error);
  }
}
