function pageReset() {
  page = 1;
}

function clearMovies() {
  refs.gallery.innerHTML = '';
}

export {
  pageReset,
  clearMovies,
}