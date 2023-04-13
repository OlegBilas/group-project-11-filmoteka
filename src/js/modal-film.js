// Запит на сервер (функція від Шаді)
// fetch()
  .then(response => response.json())
  .then(data => {
    // Розпарсинг даних
    const results = data.results;
    const movie = results[0];
    const title = movie.title;
    const voteAverage = movie.vote_average;
    const voteCount = movie.vote_count;
    const popularity = movie.popularity;
    const releaseDate = movie.release_date;
    const overview = movie.overview;

    // Відображення даних на сторінці згідно розмітки Олександра
    const titleElement = document.querySelector('.form__title');
    titleElement.textContent = title;

    const ratingElement = document.querySelector('.film__rating');
    ratingElement.textContent = voteAverage;

    const voteCountElement = document.querySelector('.form__info-details span:nth-child(2)');
    voteCountElement.textContent = voteCount;

    const popularityElement = document.querySelector('.form__info-details:nth-child(4)');
    popularityElement.textContent = popularity;

    const releaseDateElement = document.querySelector('.form__info-details:nth-child(5)');
    releaseDateElement.textContent = releaseDate;

    const overviewElement = document.querySelector('.form__about-details');
    overviewElement.textContent = overview;
  })
  .catch(error => {
    console.error('Error:', error);
  });

const watchedBtn = document.querySelector('#watched');
const queueBtn = document.querySelector('#queue');

watchedBtn.addEventListener('click', () => {
//  Додавання id до списку
});

queueBtn.addEventListener('click', () => {
//  Додавання id до списку
});