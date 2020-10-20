function modal() {
	// Modal

	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal');

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		// Либо вариант с toggle - но тогда назначить класс в верстке
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		// Либо вариант с toggle - но тогда назначить класс в верстке
		document.body.style.overflow = '';
	}

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 50000);

	function showModalbyScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalbyScroll);
		}
	}

	window.addEventListener('scroll', showModalbyScroll);
}

module.exports = modal;