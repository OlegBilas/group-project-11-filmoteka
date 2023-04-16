import axios from 'axios';
import { getGenresById } from './genres';
import { renderCollection } from './renderGallery';

const KEY = `731f4a410992078035fa504a629d03c1`;
const URL = `https://api.themoviedb.org/3`;
const imgURL = `https://image.tmdb.org/t/p/w500`;
let page = 1;
//
// ЗАПИТ ЗА КЛЮЧОВИМ СЛОВОМ АБО ПОПУЛЯРНИХ ФІЛЬМІВ
const fetchFilms = async (filmName, page) => {
  const request = filmName
    ? `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=${page}`
    : `${URL}/trending/all/day?api_key=${KEY}`;

  try {
    const response = await axios.get(request);
    const takeInfo = object => {
      const result = object.map(
        ({ genre_ids, id, poster_path, release_date = '', title }) => {
          return {
            genres: getGenresById(genre_ids),
            id,
            poster_path: `${imgURL}${poster_path}`,
            year: release_date.slice(0, 4),
            title,
          };
        }
      );
      return result;
    };
    const info = {
      page: response.data.page,
      results: takeInfo(response.data.results),
      total_pages: response.data.total_pages,
    };
    // console.log(info);
    return info;
  } catch (error) {
    throw new Error(responce.status);
  }
};
//
// ПОШУК КЛЮЧА ТРЕЙЛЕРА ЮТУБ
const fetchYouTubeKey = async filmId => {
  try {
    const response = await axios.get(
      `${URL}/movie/${filmId}/videos?api_key=${KEY}&language=en-US`
    );

    return response.data.results[0].key;
  } catch (error) {
    throw new Error(responce.status);
  }
};

// ЗАПИТ ПО ID ФІЛЬМУ
const fetchFilmsById = async filmId => {
  try {
    const response = await axios.get(
      `${URL}/movie/${filmId}?api_key=${KEY}&language=en-US`
    );
    const {
      genres,
      id,
      poster_path,
      original_title,
      overview,
      popularity,
      vote_average,
      vote_count,
    } = response.data;

    const newObj = {
      genres: genres.map(genre => genre.name).join(', '),
      id,
      poster_path: `${imgURL}${poster_path}`,
      original_title,
      overview,
      popularity,
      vote_average,
      vote_count,
      videoId: await fetchYouTubeKey(filmId),
    };
    // console.log(newObj);
    return newObj;
  } catch (error) {
    throw new Error(responce.status);
  }
};

// Нескінченний скролл

// Метод 1
const listObserver = new IntersectionObserver(entries => {
  const gif = document.querySelector(`.gif`);
  if (entries.isIntersecting) {
    page += 1;
    gif.classList.remove(`hidden`);
    // Робимо запит та рендеримо нову розмітку
  } else {
    gif.classList.add(`hidden`);
  }
}, {});
const lastChild = document.querySelector(`.list`).lastElementChild;
listObserver.observe(lastChild);

// Метод 2

window.addEventListener(`scroll`, () => {
  const documentRect = document.documentElement.getBoundingClientRect();
  // console.log(documentRect.bottom); - перевірка скролу по сторінці
  const gif = document.querySelector(`.gif`);
  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    // console.log(`DONE`); - перевірка
    page += 1;
    gif.classList.remove(`hidden`);
    // Робимо запит та рендеримо нову розмітку
  } else {
    gif.classList.add(`hidden`);
  }
});

export { fetchFilms, fetchFilmsById };
