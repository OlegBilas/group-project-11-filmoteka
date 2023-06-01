import {  loadActivePage } from './js/page-save';
import { toggleLogInButton } from './js/auth';

const CARDS_PER_PAGE = 20; // кількість карток в галереї на сторінку

//При  завантаженні сторінки, якщо користувач повернувся, будучи залогіненим у Firebase в попередній сесії
if (localStorage.getItem('fireBaseAuthorized')) {
  toggleLogInButton();
}

//Завантаження сторінки, що була активна у попередній сесії
loadActivePage();

export { CARDS_PER_PAGE };
