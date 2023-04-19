import { fetchFilms } from './fetchAPI';
import { IS_FROM_FETCH, renderCollection } from './renderGallery';
import { createPagination, hidePagination, showPagination } from './pagination';
import { QUE, WATCHED, getFromLocalstorage } from './localAPI';
import { alertSuccess, alertEmptyForm, alertSearchFailure } from './alerts';
import { onSpinner } from './spinner';

const refs = {
  searchForm: document.querySelector('.header-form'),
  nav: document.querySelector('.header-nav'),
  homeBtn: document.querySelector('.home-btn'),
  myLibraryBtn: document.querySelector('.my-library-btn'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  logo: document.querySelector('.logo-wrapper'),
  galleryList: document.querySelector('.list'),
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
  onSpinner('start');
  query = e.currentTarget.searchQuery.value.trim();
  pageReset();

  // Якщо поле пошуку не заповнене, показуємо алерт і ресетаємо форму
  if (!query) {
    onSpinner('stop');
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
      onSpinner('stop');
      alertSuccess();
      renderCollection(res);
      createPagination(res.total_pages, query);
    }

    // Якщо результатів пошуку не знайдено, показуємо алерт і порожню галерею
    if (queryResults === 0) {
      onSpinner('stop');
      alertSearchFailure();
      renderCollection(res);
      createPagination(res.total_pages, query);
    }
  } catch (error) {
    onSpinner('stop');
    console.log(error);
  }
}

// Функціонал кнопок хедеру
function onHomeClick() {
  onSpinner('start');
  refs.watchedBtn.classList.add('is-hidden');
  refs.queueBtn.classList.add('is-hidden');
  refs.searchForm.classList.remove('js-form-inactive');
  refs.nav.classList.remove('js-home-inactive');
  refs.logo.classList.remove('js-library-active');

  showPagination();
  fetchFilms('').then(collection => {
    renderCollection(collection);
    createPagination(collection.total_pages, '');
  });
  onSpinner('stop');
}

function onLibraryClick() {
  refs.watchedBtn.classList.remove('is-hidden');
  refs.queueBtn.classList.remove('is-hidden');
  refs.searchForm.classList.add('js-form-inactive');
  refs.nav.classList.add('js-home-inactive');
  refs.logo.classList.add('js-library-active');
  hidePagination();
  refs.galleryList.innerHTML = '';
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
