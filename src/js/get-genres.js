async function getGenresList() {
  const genresList = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=341a3443d9168179889e844c5b12f774'
  ).then(resp => resp.json());
  console.log(genresList);
  return genresList;
}

export default async function getGenres(genreArr) {
  let genreS = [];
  const genresList = await getGenresList();
  genreArr.map(genreId => {
    for (const g of genresList.genres) {
      if (genreId === g.id) {
        genreS.push(g.name);
      }
    }
  });

  if (genreS.length > 1) {
    genreS.splice(2, 5, 'Other');
  }
  return genreS.join(',');
}
