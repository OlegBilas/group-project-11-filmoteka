const listObserver = new IntersectionObserver(entries => {
  const gif = document.querySelector('.gif');
  if (entries.isIntersecting) {
    page += 1;
    gif.classList.remove('hidden');
    // Робимо запит та рендеримо нову розмітку
  } else {
    gif.classList.add('hidden');
  }
}, {});
