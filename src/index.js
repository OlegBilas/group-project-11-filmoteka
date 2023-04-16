//Приклад підключення бібліотеки
//import Notiflix from 'notiflix';

//Приклад підключення файлу скрипта
//import { Filmoteka } from './scripts/fetchAPI';

import modal from './js/modal';
import { fetchFilms, fetchFilmsById } from './js/fetchAPI';
import { renderCollection } from './js/renderGallery';

fetchFilms('avatar', 1).then(collection => renderCollection(collection));
