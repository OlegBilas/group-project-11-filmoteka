import axios from 'axios';

const KEY = `731f4a410992078035fa504a629d03c1`;
const URL = `https://api.themoviedb.org/3`;

const fetchFilms = async filmName => {
  try {
    const response = await axios.get(
      `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=1`
    );
    const takeInfo = object => {
      const result = object.map(
        ({ genre_ids, id, poster_path, release_date, title }) => {
          return {
            genres: genre_ids,
            id,
            poster_path,
            year: release_date,
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

export { fetchFilms };
