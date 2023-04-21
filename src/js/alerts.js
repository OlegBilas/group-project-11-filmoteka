import Notiflix from 'notiflix';

const options = {
  position: 'center-top',
  distance: '100px',
  width: '240px',
  borderRadius: '50px',
  fontSize: '16px',
}

function alertSuccess() {
  Notiflix.Notify.success('We`ve found what you were looking for!', options);
}

function alertEmptyForm() {
  Notiflix.Notify.failure('Enter your search query, please.', options);
}

function alertSearchFailure() {
  Notiflix.Notify.failure(
    'Search result not successful. Enter the correct movie name.', options);
}

function alertSearchModalFailure() {
  Notiflix.Notify.failure('Search result about this film is not successful');
}

function alertEndOfCollection() {
  Notiflix.Notify.failure("We've reached the end of your collection!");
}

export {
  alertSuccess,
  alertEmptyForm,
  alertSearchFailure,
  alertSearchModalFailure,
  alertEndOfCollection,
};
