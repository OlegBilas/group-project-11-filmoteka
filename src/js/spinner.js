
// Функція виклику спіннера.
// Приймає один з двох параметрів у вигляді строки: "start" або "stop".

function onSpinner (value) {
  const mask = document.querySelector('.mask');
  if (value === 'start') {
    mask.classList.remove('is-hidden');
  } else if (value === 'stop') {
    setTimeout(() => {
      mask.classList.add('is-hidden');
    }, 1000);
  }
};

export { onSpinner }
