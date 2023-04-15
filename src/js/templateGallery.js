const galleryList = document.querySelector('.list');

export function renderCollection(collection) {
  const films = collection.map(film => {
    const filmLink = 'https://image.tmdb.org/t/p/w500/' + film.poster_path;
    // console.log(film.year.substring(0, 4));
      return `<li class="film-card" data-id="${film.id}">
        <a class="film-link" href="${filmLink}">
          <div class="film-img"><img src=${filmLink} alt="${film.title}" loading="lazy" /></div>
          <div class="film-meta">
            <p class="film-name">${film.title}</p>
            <div class="film-info">
              <p class="film-ganre">${film.genres}</p> 
              <p class="film-year">${film.year.substring(0, 4)}</p>
            </div>
          </div>
        </a>
        </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', films);
}
