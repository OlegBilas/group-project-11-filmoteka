import { fetchFilms, fetchFilmsById } from './js/fetchAPI';

import { onSearch } from './js/header';
import { onSpinner } from './js/spinner';
import { IS_FROM_FETCH, renderCollection } from './js/renderGallery';
import { createPagination } from './js/pagination';
import { slideShow } from './js/slider';
import { saveActiveBtn, loadActivePage } from './js/page-save';
import { auth, toggleLogInButton } from './js/auth';

const CARDS_PER_PAGE = 20; // кількість карток в галереї на сторінку

console.log(localStorage.getItem('fireBaseAuthorized'));
//При  завантаженні сторінки, якщо користувач повернувся, будучи залогіненим у Firebase в попередній сесії
if (localStorage.getItem('fireBaseAuthorized')) {
  toggleLogInButton();
}

//Завантаження сторінки, що була активна у попередній сесії
loadActivePage();

export { CARDS_PER_PAGE };
