
const footerBtn = document.querySelector('.footer__btn');

footerBtn.addEventListener('click', onClick);

function onClick(event) {
	event.preventDefault();

	const modal = basicLightbox.create(
		document.querySelector('.modal-team'),
		 {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
			  onClose: () => window.removeEventListener('keydown', onEscKeyPress),
		 }
	);
	
	modal.show();

	function onEscKeyPress(event) {   
		 if (event.code === "Escape") {
			  modal.close();
		 }
	};
};

export { footerBtn, onClick };