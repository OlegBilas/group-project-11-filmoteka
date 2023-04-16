const mask = document.querySelector('.mask');

window.addEventListener('load', spinnerHandler)

function spinnerHandler() {
  mask.classList.add('is-hidden');
  setTimeout(() => {
    mask.remove();
  }, 1000)
};

export { spinnerHandler }