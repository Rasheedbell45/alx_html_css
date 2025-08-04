document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  })
);
