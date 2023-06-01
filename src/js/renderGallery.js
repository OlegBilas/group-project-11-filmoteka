import { fetchFilmsById } from './fetchAPI';
import { renderMovieModal } from './modalFilm';
import { putEventListenersToAll } from './modal';
import { alertSearchModalFailure } from './alerts';
import { onSpinner } from './spinner';
import { CARDS_PER_PAGE } from '../index';

const galleryList = document.querySelector('.list');
const IS_FROM_FETCH = true;

function renderCollection(collection, IS_FROM_FETCH = true) {
  collection = IS_FROM_FETCH ? collection.results : collection;
  // console.log(collection);

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
    if (
      IS_FROM_FETCH ||
      (!IS_FROM_FETCH && galleryList.children.length === 0)
    ) {
      galleryList.innerHTML = films;
      // console.log('repainted!');
    } else if (!IS_FROM_FETCH && galleryList.children.length > 0) {
      // console.log(galleryList.children.length);
      galleryList.insertAdjacentHTML('beforeend', films);
      // console.log('Added cards');
    }
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
