//Приклад підключення бібліотеки
//import Notiflix from 'notiflix';

//Приклад підключення файлу скрипта
//import { Filmoteka } from './scripts/fetchAPI';

import modal from './js/modal';
import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { onSearch } from './js/header';
import { renderCollection } from './js/renderGallery';
import { renderMovieModal } from './js/modalFilm';

fetchFilms('').then(collection => renderCollection(collection));

