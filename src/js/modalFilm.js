import { putEventListenersToOverlay } from './modal';
import { YoutubeVideo } from './youtubevideo';
import {
  QUE,
  WATCHED,
  addToLocalstorage,
  removeFromLocalstorage,
} from './localAPI';
import { spinnerHandler } from './spinner';

const refModalFilmContainer = document.querySelector('.backdrop-container');

function localAPIInteraction(objectCard) {
  const watchedBtn = document.getElementById('watched');
  const queueBtn = document.getElementById('queue');

  watchedBtn.addEventListener('click', () => {
    if (watchedBtn.classList.contains('is-added')) {
      removeFromLocalstorage(WATCHED, objectCard);
      watchedBtn.classList.toggle('is-added');
      watchedBtn.textContent = 'Add to watched';
    } else {
      addToLocalstorage(WATCHED, objectCard);
      watchedBtn.classList.toggle('is-added');
      watchedBtn.textContent = 'Remove from watched';
    }
  });
  queueBtn.addEventListener('click', () => {
    if (queueBtn.classList.contains('is-added')) {
      removeFromLocalstorage(QUE, objectCard);
      queueBtn.classList.toggle('is-added');
      queueBtn.textContent = 'Add to queue';
    } else {
      addToLocalstorage(QUE, objectCard);
      queueBtn.classList.toggle('is-added');
      queueBtn.textContent = 'Remove from queue';
    }
  });
}

export function renderMovieModal(movieData, objectCard) {
  const {
    genres,
    id,
    poster_path,
    original_title,
    overview,
    popularity,
    vote_average,
    vote_count,
    videoId,
  } = movieData;

  let videoIframe = '';
  if (videoId) {
    const youtubeVideo = new YoutubeVideo();
    videoIframe = youtubeVideo.createIframe(videoId);

    refModalFilmContainer.innerHTML = `
      <div class="modal" data-modal="2">
        <button type="button" class="btn-close js-close-modal" id="btn-close">
            <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">

    <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>

    </svg>
        </button>
        <div id="modal_form">
            <form class="form">
                <div class="form__film-card">
                    <div class="form__film-img">
                        <img class="form-img" src="${poster_path}"
                            alt="${original_title}">
                    </div>
                </div>
                <div class="form__info">
                    <h2 class="form__title">${original_title}</h2>
                    <ul class="form__info-list">
                        <li class="form__info-item">
                            <p class="form__info-name">Vote / Votes</p>
                            <p class="form__info-details"> <span class="film__rating">${vote_average}</span>/<span class="film__voice">${vote_count}</span></p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Popularity</p>
                            <p class="form__info-details">${popularity}</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Original Title</p>
                            <p class="form__info-details details-title">${original_title}</p>
                        </li>
                        <li class="form__info-item">
                            <p class="form__info-name">Genre</p>
                            <p class="form__info-details">${genres}</p>
                        </li>
                    </ul>
                    <div class="form__about">
                        <h3 class="form__about-name">About</h3>
                        <p class="form__about-details">${overview}</p>
                    </div>
                    <div class="form__btn-list">
                        <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>
                        <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>
                    </div>
                </div>
            </form>
            <div class="form__film-card">
                <div class="form__film-img">
                    ${videoIframe.outerHTML}
                </div>
              </div>
        </div>
    </div>
`;
  } else {
    refModalFilmContainer.innerHTML = `
    <div class="modal" data-modal="2">
        <button type="button" class="btn-close js-close-modal" id="btn-close">
             <svg class="form__close-icon" width="24px" height="24px" viewBox="0 0 30 30">
    <path data-btn="close" d="M14.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>
    </svg> 
            </button>
        <div id="modal_form">
          <form class="form">
              <div class="form__film-card">
                  <div class="form__film-img">
                      <img class="form-img" src="${poster_path}"
                          alt="${original_title}">
                  </div>
              </div>
              <div class="form__info">
                  <h2 class="form__title">${original_title}</h2>
                  <ul class="form__info-list">
                      <li class="form__info-item">
                          <p class="form__info-name">Vote / Votes</p>
                          <p class="form__info-details"> <span class="film__rating">${vote_average}</span>/<span class="film__voice">${vote_count}</span></p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name">Popularity</p>
                          <p class="form__info-details">${popularity}</p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name">Original Title</p>
                          <p class="form__info-details details-title">${original_title}</p>
                      </li>
                      <li class="form__info-item">
                          <p class="form__info-name">Genre</p>
                          <p class="form__info-details">${genres}</p>
                      </li>
                  </ul>
                  <div class="form__about">
                      <h3 class="form__about-name">About</h3>
                      <p class="form__about-details">${overview}</p>
                  </div>
                  <div class="form__btn-list">
                      <button data-action="add" id="watched" class="form-button form-add-btn" type="button">Add to watched</button>
                      <button data-action="add" id="queue" class="form-button form-queue-btn" type="button">Add to queue</button>
                  </div>
              </div>
          </form>
        </div>
    </div>
`;
  }

  refModalFilmContainer.addEventListener('load', spinnerHandler);
  //   refModalFilmContainer.classList.add('js-overlay-modal');
  putEventListenersToOverlay(refModalFilmContainer); //навішуємо слухачів для закриття модалки фільму
  localAPIInteraction(objectCard); // навішування обробників на кнопки додавання до локального сховища
}
