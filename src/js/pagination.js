import Pagination from 'tui-pagination';
import { fetchFilms } from './fetchAPI';
import { renderCollection } from './renderGallery';

let instance;
const galleryList = document.querySelector('.list');
const container = document.querySelector('.pagination');
// функція приймає кількість сторінок та рядок, за яким робиться запит, і створює пагінацію на сторінці. 
function createPagination(totalPages, filmName) {
    //створення пагінації
  instance = new Pagination(container, {
    totalItems: totalPages,
    itemsPerPage: 1,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}" aria-label="next-page">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  });

    //обробка видимості деяких кнопок пагінації
    document.querySelector(".tui-ico-last").textContent = totalPages;
     document.querySelector(".tui-first").classList.add("hidden");
    document.querySelector(".tui-last-child").classList.add("mobile-hidden");

    if (totalPages <= 5) {
        document.querySelector(".tui-last").classList.add("hidden");
    }
    
    // при переході на сторінку викликає рендер цієї сторінки та при необхідності робить видимими чи невидимими деякі кнопки
  instance.on('afterMove', event => {
    const currentPage = event.page;
    [...galleryList.children].forEach(element => element.remove()); //очищує галерею
      fetchAndRender(filmName, currentPage); // виклик асинхронної функції, яка зробить запит на сервер та згенрує галерею
      
      //обробка видимості деяких кнопок пагінації
      if (totalPages > 5) {
          currentPage <= 3 ?  document.querySelector(".tui-first").classList.add("hidden") :  document.querySelector(".tui-first").classList.remove("hidden");
          document.querySelector(".tui-ico-first").textContent = "1";
          document.querySelector(".tui-ico-last").textContent = totalPages;
          totalPages - currentPage >= 2 ? document.querySelector(".tui-last").classList.remove("hidden") : document.querySelector(".tui-last").classList.add("hidden");
      } else {
           document.querySelector(".tui-first").classList.add("hidden");
          document.querySelector(".tui-last").classList.add("hidden");
      }

      // обробка кнопок пагінації для мобільної версії
      document.querySelector(".tui-last-child").classList.add("mobile-hidden");
      document.querySelector(".tui-first-child").classList.add("mobile-hidden");
      
      if (window.innerWidth < 768) {
          if (currentPage <= 3) {
              document.querySelector(".tui-last-child").classList.add("mobile-hidden");
              document.querySelector(".tui-first-child").classList.remove("mobile-hidden");
              document.querySelector(".tui-first-child").nextSibling.classList.remove("mobile-hidden");
          }
          if (totalPages - currentPage <= 1) {
              document.querySelector(".tui-last-child").classList.remove("mobile-hidden");
              document.querySelector(".tui-first-child").classList.add("mobile-hidden");
          }
      }
  });
}
//функція , яка приймає слово-запит та номер строінки та викликає генерацію цієї сторінки
async function fetchAndRender(name, page) {
  const data = await fetchFilms(name, page);
  renderCollection(data);
}

// функція, яка ховає пагінацію
function hidePagination() {
  container.classList.add('hidden');
}
// функція, яка робить пагінацію видимою
function showPagination() {
  container.classList.remove('hidden');
}

export { createPagination, hidePagination, showPagination };
