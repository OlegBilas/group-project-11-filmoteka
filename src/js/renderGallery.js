const galleryList = document.querySelector('.list');

// export function renderCollection(collection) {
//   const films = collection.results
//     .map(film => {
//       return `<li class="film-card" data-id="${film.id}">
//       <a class="film-link" href="${film.link}">
//         <img src="${film.img}" alt="${film.name}" loading="lazy" />
//         <div class="film-meta">
//           <span class="film-name">${film.name}</span>
//           <div class="film-info">
//             <span class="film-ganre">${film.ganre}</span> 
//             <span class="film-year">${film.year}</span>
//           </div>
//         </div>
//       </a>
//       </li>`;
//     })
//     .join('');
//   galleryList.insertAdjacentHTML('beforeend', films);
// }


const galleryItems = [
  {
    link:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    id: '32',
    name: 'portal',
    ganre: 'drama',
    year: '2020'
  },
  {
    link:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    id: '32',
    name: 'portal',
    ganre: 'Drama',
    year: '2020'
  },  
  {
    link:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    id: '32',
    name: 'portal',
    ganre: 'drama',
    year: '2020'
  },
  {
    link:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    id: '32',
    name: 'portal',
    ganre: 'drama',
    year: '2020'
  }
]

  function renderCollection(collection) {
    const films = galleryItems.map(film => {
        return `<li class="film-card" data-id="${film.id}">
        <a class="film-link" href="${film.link}">
          <div class="film-img"><img src="${film.link}" alt="${film.name}" loading="lazy" width=280px /></div>
          <div class="film-meta">
            <p class="film-name">${film.name}</p>
            <div class="film-info">
              <p class="film-ganre">${film.ganre}</p> 
              <p class="film-year">${film.year}</p>
            </div>
          </div>
        </a>
        </li>`;
      })
      .join('');
    galleryList.insertAdjacentHTML('beforeend', films);
  }

  renderCollection(galleryItems)