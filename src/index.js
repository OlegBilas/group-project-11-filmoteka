//Приклад підключення бібліотеки
//import Notiflix from 'notiflix';

//Приклад підключення файлу скрипта
//import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { onSearch } from './js/header';
import { onSpinner } from './js/spinner';
import { IS_FROM_FETCH, renderCollection } from './js/renderGallery';
import { createPagination } from './js/pagination';

getGallery('', IS_FROM_FETCH);

export function getGallery(keyWord, fromFetch) {
  fetchFilms(keyWord).then(collection => {
    onSpinner('start');
    renderCollection(collection, fromFetch);
    createPagination(collection.total_pages, '');
    onSpinner('stop');
  });
}
