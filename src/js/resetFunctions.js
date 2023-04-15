function pageReset() {
  page = 1;
}

function clearMovies() {
  refs.galleryList.innerHTML = '';
}

export {
  pageReset,
  clearMovies,
}