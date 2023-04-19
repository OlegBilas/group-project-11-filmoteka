//Приклад підключення бібліотеки
//import Notiflix from 'notiflix';

//Приклад підключення файлу скрипта
//import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { putEventListenersToAll } from './js/modal';
import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { onSearch } from './js/header';
import { onSpinner } from './js/spinner';
import { renderCollection } from './js/renderGallery';
import { renderMovieModal } from './js/modalFilm';
import { createPagination } from './js/pagination';
import { slideShow } from './js/slider';

fetchFilms('').then(collection => {
  onSpinner('start');
  renderCollection(collection);
  createPagination(collection.total_pages, '');
  onSpinner('stop');
});
