const movieModalRefs = {
  modal: document.querySelector('.js-backdrop'),
  closeModalBtn: document.querySelector('#btn-close'),
  watchedBtn: document.querySelector('#watched'),
  queueBtn: document.querySelector('#queue')
}

function toggleModal() {
    // для заборони скролу можна навісити на body клас
    // document.body.classList.toggle("menu_open");
    refs.modal.classList.toggle("is-hidden");
  }

movieModalRefs.closeModalBtn.addEventListener("click", toggleModal());

const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');

watchedBtn.addEventListener('click', () => {
//  Додавання id до списку
});

queueBtn.addEventListener('click', () => {
//  Додавання id до списку
});