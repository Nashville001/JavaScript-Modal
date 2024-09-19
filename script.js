'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modalClose = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openModal);

closeModal.addEventListener('click', function () {
  modalClose();
});
overlay.addEventListener('click', modalClose);

document.addEventListener('keydown', function (event) {
  //   console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClose();
  }
});
