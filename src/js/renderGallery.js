import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';
import { putEventListenersToAll } from './modal';
import { alertSearchModalFailure } from './alerts';
import { onSpinner } from './spinner';

const galleryList = document.querySelector('.list');
const IS_FROM_FETCH = true;
const ADD_TO_COLLECTION = false;

function renderCollection(
  collection,
  IS_FROM_FETCH = true,
  ADD_TO_COLLECTION = false
) {
  collection = IS_FROM_FETCH ? collection.results : collection;
  const films = collection
    .map(film => {
      return `<li class="film-card">
      <a class="film-link js-open-modal" href="${film.poster_path}" data-id="${film.id}" data-modal="2">
        <div class="film-img"><img src="${film.poster_path}" alt="${film.title}" loading="lazy" /></div>
        <div class="film-meta">
          <span class="film-name">${film.title}</span>
          <div class="film-info">
            <span class="film-ganre">${film.genres}</span>
            <span class="film-year">${film.year}</span>
          </div>
        </div>
      </a>
      </li>`;
    })
    .join('');

  if (films) {
    // if (ADD_TO_COLLECTION) {
    //   galleryList.insertAdjacentHTML(films, 'beforeend');
    // } else {
    galleryList.innerHTML = films;
    // }
    putEventListenersToAll(); //навішуємо слухачів для відкриття модалки фільму
  } else {
    galleryList.innerHTML = '';
  }
}

galleryList.addEventListener('click', async event => {
  event.preventDefault();
  const filmCard = event.target.closest('.film-link');
  if (!filmCard) return;
  const filmId = filmCard.dataset.id;
  const objectCard = getDataCard(filmCard);
  const refModalFilmContainer = document.querySelector('.backdrop-container');
  onSpinner('start');
  try {
    const movieDetails = await fetchFilmsById(filmId);
    renderMovieModal(movieDetails, objectCard);
    refModalFilmContainer.style.display = 'block';
  } catch (error) {
    refModalFilmContainer.style.display = 'none';
    alertSearchModalFailure();
    // console.log(error);
  }
  onSpinner('stop');
});

function getDataCard(element) {
  const poster_path = element.href;
  const id = element.dataset.id;
  const title = element.querySelector('.film-name').textContent;
  const genres = element.querySelector('.film-ganre').textContent;
  const year = element.querySelector('.film-year').textContent;

  return { poster_path, id, title, genres, year };
}

export { IS_FROM_FETCH, renderCollection, ADD_TO_COLLECTION };
