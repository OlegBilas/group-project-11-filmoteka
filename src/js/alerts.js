import Notiflix from 'notiflix';
import { lang } from './fetchAPI';

const options = {
  // position: 'right-top',
  // distance: '100px',
  // width: '240px',
  // borderRadius: '50px',
  fontSize: '16px',
};

function alertSuccess() {
  Notiflix.Notify.success(
    lang === 'uk'
      ? 'Ми знайшли те, що Ви шукали!'
      : 'We`ve found what you were looking for!',
    options
  );
}

function alertEmptyForm() {
  Notiflix.Notify.failure(
    lang === 'uk'
      ? 'Введіть Ваш пошуковий запит, будь ласка.'
      : 'Enter your search query, please.',
    options
  );
}

function alertEmptyFields() {
  Notiflix.Notify.failure(
    lang === 'uk' ? `Будь ласка, заповніть всі поля` : `Please fill all fields`,
    options
  );
}

function alertSearchFailure() {
  Notiflix.Notify.failure(
    lang === 'uk'
      ? 'Результат пошуку невдалий. Введіть коректну назву фільму.'
      : 'Search result is not successful. Enter the correct movie name.',
    options
  );
}

function alertSearchModalFailure() {
  Notiflix.Notify.failure(
    lang === 'uk'
      ? 'Результат пошуку по цьому фільму був невдалим'
      : 'Search result about this film is not successful',
    options
  );
}

function alertEndOfCollection() {
  Notiflix.Notify.failure(
    lang === 'uk'
      ? 'Ми досягли кінця колекції Ваших фільмів!'
      : "We've reached the end of your collection!",
    options
  );
}

function alertSuccessRegistrationLogIn(message) {
  Notiflix.Notify.success(message, options);
}

function alertFailedRegistrationLogIn(message) {
  Notiflix.Notify.failure(message, options);
}

function alertInfo(message) {
  Notiflix.Notify.info(message, options);
}

export {
  alertSuccess,
  alertEmptyForm,
  alertSearchFailure,
  alertSearchModalFailure,
  alertEndOfCollection,
  alertEmptyFields,
  alertSuccessRegistrationLogIn,
  alertFailedRegistrationLogIn,
  alertInfo,
};
