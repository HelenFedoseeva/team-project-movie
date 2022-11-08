const singInRef = document.querySelector('.header-login__button');
const backdropRef = document.querySelector('.backdrop');
const modalRef = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-btn');

singInRef.addEventListener('click', onSingInClick);

function onSingInClick(e) {
  e.preventDefault();

  document.addEventListener('keydown', onEscTap);
  backdropRef.addEventListener('click', onClickCloseBtnOrOutside);
  modalCloseBtn.addEventListener('click', onClickCloseBtnOrOutside);
  openModal();
}

function openModal() {
  backdropRef.classList.remove('is-hidden');
}

function onEscTap(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function onClickCloseBtnOrOutside(e) {
  if (
    e.currentTarget.classList.value === 'modal-btn' ||
    e.target.classList.value === 'backdrop'
  ) {
    closeModal();
  }
}

function closeModal() {
  backdropRef.classList.toggle('is-hidden');
  document.removeEventListener('keydown', onEscTap);
  backdropRef.removeEventListener('click', onClickCloseBtnOrOutside);
  singInRef.textContent = 'Sing Out';
}
