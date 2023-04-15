import axios from 'axios';
import { getGenresById } from './genres';

const KEY = `731f4a410992078035fa504a629d03c1`;
const URL = `https://api.themoviedb.org/3`;
const imgURL = `https://image.tmdb.org/t/p/w500`;
//
// ЗАПИТ ЗА КЛЮЧОВИМ СЛОВОМ АБО ПОПУЛЯРНИХ ФІЛЬМІВ
const fetchFilms = async (filmName, page = 1) => {
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
    return newObj;
    // console.log(newObj);
  } catch (error) {
    throw new Error(responce.status);
  }
};
export { fetchFilms, fetchFilmsById };
