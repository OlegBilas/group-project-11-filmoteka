import { fetchFilms } from "./fetchAPI";
import { renderCollection } from "./renderGallery";
// import { pageReset } from "./js/resetFunctions";
import { getFromLocalstorage } from "./localAPI";
import {
  alertSuccess,
  alertEmptyForm,
  alertSearchFailure,
} from "./alerts";

const refs = {
  searchForm: document.querySelector('.search-form'),
  homeBtn: document.querySelector('.home-btn'),
  myLibraryBtn: document.querySelector('.my-library-btn'),
  watchedBtn: document.querySelector('.watcher-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  galleryList: document.querySelector('list')
}
let query = '';
// let page = 1;
let queryResults = 0;

refs.searchForm.addEventListener('submit', onSearch);
refs.homeBtn.addEventListener('click', onHomeClick);
refs.myLibraryBtn.addEventListener('click', onLibraryClick);
// refs.watchedBtn.addEventListener('click', onWatchedClick);
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
  // console.log(res.results.length);
  queryResults = res.results.length;
// Якщо результат пошуку успішний, показуємо алерт і рендеремо нову відповідно до запиту
  try {
    if (queryResults > 0) {
      alertSuccess();
      // clearMovies();
      renderCollection(res);
    }

// Якщо результатів пошуку не знайдено, показуємо алерт і порожню галерею
    if (queryResults === 0) {
      // clearMovies();
      alertSearchFailure();
      renderCollection(res);
    }
  } catch (error) {
    console.log(error);
  }
}

// Функціонал кнопок хедеру
function onHomeClick() {
  // clearMovies();
  renderCollection();
}

function onLibraryClick() {
  // clearMovies();
  getFromLocalstorage();
  console.log(getFromLocalstorage());
}

function onWatchedClick() {
  // clearMovies();
  getFromLocalstorage();
}

function onQueueClick() {
  // clearMovies();
  getFromLocalstorage();
}

// function clearMovies() {
//   refs.galleryList.innerHTML = '';
// }


function pageReset() {
  page = 1;
}

export { onSearch }
