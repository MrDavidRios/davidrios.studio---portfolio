const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const direction = entry.target.getAttribute("direction");

      if (entry.isIntersecting) {
        entry.target.classList.remove(`slide-out-from-${direction}`);
        entry.target.classList.add(`slide-in-from-${direction}`);
      } else {
        entry.target.classList.add(`slide-out-from-${direction}`);
        entry.target.classList.remove(`slide-in-from-${direction}`);
      }
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll(".project-showcase").forEach((el) => {
  observer.observe(el);
});
