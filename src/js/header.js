import { fetchFilms } from './fetchAPI';
import { IS_FROM_FETCH, renderCollection } from './renderGallery';
import { createPagination, hidePagination, showPagination } from './pagination';
import { QUE, WATCHED, getFromLocalstorage } from './localAPI';
import { alertSuccess, alertEmptyForm, alertSearchFailure } from './alerts';

const refs = {
  searchForm: document.querySelector('.search-form'),
  homeBtn: document.querySelector('.home-btn'),
  myLibraryBtn: document.querySelector('.my-library-btn'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};
let query = '';
let queryResults = 0;

refs.searchForm.addEventListener('submit', onSearch);
refs.homeBtn.addEventListener('click', onHomeClick);
refs.myLibraryBtn.addEventListener('click', onLibraryClick);
refs.watchedBtn.addEventListener('click', onWatchedClick);
refs.queueBtn.addEventListener('click', onQueueClick);

// Відправляємо запит на бекенд
async function onSearch(e) {
  e.preventDefault();
  query = e.currentTarget.searchQuery.value.trim();
  pageReset();

  // Якщо поле пошуку не заповнене, показуємо алерт і ресетаємо форму
  if (!query) {
    alertEmptyForm();
    return;
  }
  e.currentTarget.reset();

  // Записуємо фетч у змінну, перевіряємо кількість об'єктів отриманих від бекенду
  const res = await fetchFilms(query);
  queryResults = res.results.length;

  // Якщо результат пошуку успішний, показуємо алерт і рендеремо нову відповідно до запиту
  try {
    if (queryResults > 0) {
      alertSuccess();
      renderCollection(res);
      createPagination(res.total_pages, query);
    }

    // Якщо результатів пошуку не знайдено, показуємо алерт і порожню галерею
    if (queryResults === 0) {
      alertSearchFailure();
      renderCollection(res);
      createPagination(res.total_pages, query);
    }
  } catch (error) {
    console.log(error);
  }
}

// Функціонал кнопок хедеру
function onHomeClick() {
  refs.watchedBtn.classList.add('is-hidden');
  refs.queueBtn.classList.add('is-hidden');
  showPagination();
  fetchFilms('').then(collection => {
    renderCollection(collection);
    createPagination(collection.total_pages, '');
  });
}

function onLibraryClick() {
  refs.watchedBtn.classList.remove('is-hidden');
  refs.queueBtn.classList.remove('is-hidden');
  hidePagination();
  getFromLocalstorage(); ///???
}

function onWatchedClick() {
  const collection = getFromLocalstorage(WATCHED);
  renderCollection(collection, !IS_FROM_FETCH);
}

function onQueueClick() {
  const collection = getFromLocalstorage(QUE);
  renderCollection(collection, !IS_FROM_FETCH);
}

function pageReset() {
  page = 1;
}

export { onSearch, onHomeClick, onLibraryClick, onWatchedClick, onQueueClick };
