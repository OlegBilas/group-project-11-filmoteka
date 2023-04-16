import Notiflix from 'notiflix';

function alertSuccess() {
  Notiflix.Notify.success(`Search success`);
}

function alertEmptyForm() {
  Notiflix.Notify.failure('Alert empty form');
}

function alertSearchFailure() {
  Notiflix.Notify.failure(
    'Search result not successful. Enter the correct movie name.'
  );
}

function alertSearchModalFailure() {
  Notiflix.Notify.failure('Search result about this film is not successful');
}

export {
  alertSuccess,
  alertEmptyForm,
  alertSearchFailure,
  alertSearchModalFailure,
};
