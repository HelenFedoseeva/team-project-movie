const swithThemeBtn = document.querySelector('.header__theme-btn');
const bodyRef = document.querySelector('.body');
console.log(swithThemeBtn);

swithThemeBtn.addEventListener('click', switchToDarkTheme);

function switchToDarkTheme() {
  bodyRef.classList.toggle('dark-theme');
  const cardsMovieRef = document.querySelectorAll('.movie-info');
  //   console.log(cardsMovieRef);
  //   const card = cardsMovieRef.map(card => console.log(card));

  //   cardsMovieRef.classList.add('dark-theme');
}
