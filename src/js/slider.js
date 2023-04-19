let value = 0;

function slideShow() {
  if (value < -2431) {
    const box = document.querySelector(`.container_img`);
    box.style.transform = 'translateX(' + `-0` + 'px) ';
    box.style.transition = `3000ms cubic-bezier(0.4, 0, 0.2, 1)`;
    value = 0;
    console.log(value);
    return;
  }
  value -= 1216;
  const box = document.querySelector(`.container_img`);
  box.style.transform = 'translateX(' + `${value}` + 'px) ';
  box.style.transition = `3000ms cubic-bezier(0.4, 0, 0.2, 1)`;

  console.log(value);
}
setInterval(slideShow, 5000);
slideShow();

export { slideShow };
