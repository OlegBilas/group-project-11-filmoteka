import { fetchFilms } from './fetchAPI';
import {renderCollection } from './renderGallery';
import { createPagination, hidePagination, showPagination } from './pagination';
import { QUE, WATCHED } from './localAPI';
import { alertSuccess, alertEmptyForm, alertSearchFailure } from './alerts';
import { onSpinner } from './spinner';
import { startObservering, stopObservering } from './intersectionObserver';
import { saveActiveBtn, deleteActivePage } from './page-save';
import { closeMobileMenu } from './auth';

const refs = {
  headerhForm: document.querySelector('.header-form'),
  searchForm: document.querySelector('.search-form'),
  nav: document.querySelector('.header-nav'),
  homeBtn: document.querySelector('.home-btn'),
  myLibraryBtn: document.querySelector('.my-library-btn'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  logo: document.querySelector('.logo-wrapper'),
  logoRef: document.querySelector('.logo'),
  galleryList: document.querySelector('.list'),
};
let query = '';
let queryResults = 0;

refs.searchForm.addEventListener('submit', onSearch);
refs.homeBtn.addEventListener('click', onHomeClick);
refs.logoRef.addEventListener('click', onHomeClick);
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
      //Якщо у результаті запиту лише одна сторінка
      if (res.total_pages === 1) {
        startObservering();
        hidePagination();
      }
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
  refs.headerhForm.classList.remove('js-form-inactive');
  refs.nav.classList.remove('js-home-inactive');
  refs.logo.classList.remove('js-library-active');
  refs.homeBtn.classList.add('active-btn');
  closeMobileMenu();
  if (refs.myLibraryBtn.classList.contains('active-btn')) {
    stopObservering();
    refs.myLibraryBtn.classList.remove('active-btn');
  }

  fetchFilms('').then(collection => {
    renderCollection(collection);
    createPagination(collection.total_pages, '');
  });
  showPagination();
  onSpinner('stop');
  deleteActivePage();
  saveActiveBtn();
}

function onLibraryClick() {
  refs.watchedBtn.classList.remove('is-hidden');
  refs.queueBtn.classList.remove('is-hidden');
  refs.headerhForm.classList.add('js-form-inactive');
  refs.nav.classList.add('js-home-inactive');
  refs.logo.classList.add('js-library-active');
  hidePagination();
  refs.homeBtn.classList.remove('active-btn');
  refs.myLibraryBtn.classList.add('active-btn');
  closeMobileMenu();
  //за умовчанням відкриваємо сторінку черги до перегляду
  onQueueClick();
  deleteActivePage();
  saveActiveBtn();
}

function onWatchedClick() {
  refs.galleryList.innerHTML = '';
  hidePagination();
  startObservering(WATCHED);
  refs.watchedBtn.classList.add('active-library-btn');
  refs.queueBtn.classList.remove('active-library-btn');
}

function onQueueClick() {
  refs.galleryList.innerHTML = '';
  hidePagination();
  startObservering(QUE);
  refs.watchedBtn.classList.remove('active-library-btn');
  refs.queueBtn.classList.add('active-library-btn');
}

function pageReset() {
  const page = 1;
}

export { onSearch, onHomeClick, onLibraryClick, onWatchedClick, onQueueClick };
