const galleryList = document.querySelector('list');
export function renderCollection(collection) {
  const films = collection.results
    .map(film => {
      return `<li class="film-card>
      <a class="film-link" href="${film.link}">
      <img src="${film.img}" alt="${film.name}" loading="lazy" />
      <div class="info">
        //   имя
      <span class="film__name">${film.name}</span>
      <div class="film__info">
        // жанр
            <span class="film__ganre">${film.ganre}</span>
        //   год 
            <span class="film__year">${film.year}</span>
      </div>
      </div>
      </a >
      </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', films);
}
