const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (entry.target.getAttribute('direction') == 'left') entry.target.classList.add('slide-in-from-left');
				else entry.target.classList.add('slide-in-from-right');
			}
		});
	},
	{ threshold: 1 }
);

document.querySelectorAll('.project-showcase').forEach((el) => {
	observer.observe(el);
});
