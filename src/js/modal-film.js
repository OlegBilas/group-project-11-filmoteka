import * as basicLightbox from 'basiclightbox';
import { YoutubeVideo } from './youtubevideo';
import { QUE, WATCHED, addToLocalstorage } from './localAPI';

export function renderMovieModal({
  genres,
  id,
  poster_path,
  original_title,
  overview,
  popularity,
  vote_average,
  vote_count,
  videoId,
}) {
  const youtubeVideo = new YoutubeVideo();
  const videoIframe = youtubeVideo.createIframe(videoId);

  const instance = basicLightbox.create(
    `
<div class="backdrop js-backdrop">
    <div class="modal">
        ​
        <button type="button" class="btn-close" id="btn-close">
            <svg class="form__close-icon" width="30px" height="30px">
                <use href="./images/icons.svg#icon-close"></use>
            </svg> </button>
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
              <div class="form__film-card">
                <div class="form__film-img">
                ${videoIframe.outerHTML}
                </div>
              </div>
          </form>
        </div>
    </div>
</div>
`,
    {
      onShow: instance => {
        instance.element().querySelector('#watched').onclick =
          addToLocalstorage(WATCHED, {
            genres,
            id,
            poster_path,
            original_title,
            overview,
            popularity,
            vote_average,
            vote_count,
            videoId,
          });
        instance.element().querySelector('#queue').onclick = addToLocalstorage(
          QUE,
          {
            genres,
            id,
            poster_path,
            original_title,
            overview,
            popularity,
            vote_average,
            vote_count,
            videoId,
          }
        );
        instance.element().querySelector('#btn-close').onclick = instance.close;
      },
    }
  );

  instance.show();
}