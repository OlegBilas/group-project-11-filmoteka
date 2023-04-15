const galleryList = document.querySelector('.list');

// export function renderCollection(collection) {
//   const films = collection.results
//     .map(film => {
//       return `<li></li>`;
//     })
//     .join('');
//   galleryList.insertAdjacentHTML('beforeend', films);
// }


const galleryItems = [
  {
    page: 1,
  results: [
   
{genres: `Action`, id: 609578, poster_path: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg', year: '2019', title: 'Hey'}
	],
total_pages: 792,
  },

  {
    page: 1,
  results: [
   
{genres: `Action`, id: 609578, poster_path: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg', year: '2019', title: 'Hey'}
	],
total_pages: 792,
  },
  
  {
    page: 1,
  results: [
   
{genres: `Action`, id: 609578, poster_path: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg', year: '2019', title: 'Hey'}
	],
total_pages: 792,
  },

  {
    page: 1,
  results: [
   
{genres: `Action`, id: 609578, poster_path: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg', year: '2019', title: 'Hey'}
	],
total_pages: 792,
  },
]

console.log(galleryItems[0].results[0].poster_path);

  function renderCollection(collection) {
    const films = galleryItems.map(film => {
        return `<li class="film-card" data-id="${film.results[0].id}">
        <a class="film-link" href="${film.results[0].poster_path}">
          <div class="film-img"><img src="${film.results[0].poster_path}" alt="${film.results[0].title}" loading="lazy" /></div>
          <div class="film-meta">
            <p class="film-name">${film.results[0].title}</p>
            <div class="film-info">
              <p class="film-ganre">${film.results[0].genres}</p> 
              <p class="film-year">${film.results[0].year}</p>
            </div>
          </div>
        </a>
        </li>`;
      })
      .join('');
    galleryList.insertAdjacentHTML('beforeend', films);
  }

  renderCollection(galleryItems)