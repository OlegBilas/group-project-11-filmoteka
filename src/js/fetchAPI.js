import axios from 'axios';
import { showGenres, showGenresById, start } from './genres';

const KEY = `731f4a410992078035fa504a629d03c1`;
const URL = `https://api.themoviedb.org/3`;
const imgURL = `https://image.tmdb.org/t/p/origina`;
//
// ЗАПИТ ЗА КЛЮЧОВИМ СЛОВОМ
const fetchFilms = async filmName => {
  try {
    const response = await axios.get(
      `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=1`
    );
    const takeInfo = object => {
      const result = object.map(
        ({ genre_ids, id, poster_path, release_date, title }) => {
          return {
            genres: start(genre_ids),
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
    console.log(info);
  } catch (error) {
    throw new Error(responce.status);
  }
};
//
// ПОШУК КЛЮЧА
const fetchYouTubeKey = async filmId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=731f4a410992078035fa504a629d03c1&language=en-US`
    );

    const key = response.data.results.map(code => {
      return code.key;
    });

    return key;
  } catch (error) {
    throw new Error(responce.status);
  }
};

// ЗАПИТ ПО ID ФІЛЬМУ
const fetchFilmsById = async filmId => {
  try {
    const response = await axios.get(
      `${URL}/movie/${filmId}videos?api_key=${KEY}&language=en-US`
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
      key,
    } = response.data;
    const newObj = {
      genres: showGenresById(genres),
      id,
      poster_path: `${imgURL}${poster_path}`,
      original_title,
      overview,
      popularity,
      vote_average,
      vote_count,
      videoId: fetchYouTubeKey(filmId).then(result => {
        console.log(...result);
      }),
    };
    console.log(newObj);
  } catch (error) {
    throw new Error(responce.status);
  }
};
export { fetchFilms, fetchFilmsById };
