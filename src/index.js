//Приклад підключення бібліотеки
//import Notiflix from 'notiflix';

//Приклад підключення файлу скрипта
//import { Filmoteka } from './scripts/fetchAPI';

import { putEventListeners } from './js/modal';
import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { onSearch } from './js/header';
import { spinnerHandler } from './js/spinner';
import { renderCollection } from './js/renderGallery';
import { renderMovieModal } from './js/modalFilm';
import { createPagination } from './js/pagination';

putEventListeners(); // навішування обробників на кнопки відкриття модалок

fetchFilms('').then(collection => {
  renderCollection(collection);
  createPagination(collection.total_pages, '');
});
