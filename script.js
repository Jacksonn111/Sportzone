const newsBtn = document.getElementById('newsBtn');

newsBtn.addEventListener('click', () => {
  document.getElementById('news').scrollIntoView({
    behavior: 'smooth'
  });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 25px #00ff88';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});