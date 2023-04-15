import Notiflix from "notiflix";

function alertSuccess() {
  Notiflix.Notify.success(`Search success`);
}

function alertEmptyForm() {
  Notiflix.Notify.failure('Alert empty form');
}

function alertSearchFailure() {
  Notiflix.Notify.failure('Search result not successful. Enter the correct movie name.');
}

export {
  alertSuccess,
  alertEmptyForm,
  alertSearchFailure,
}