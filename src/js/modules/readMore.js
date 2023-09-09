export const readMore = () => {
  const moreBtn = document.getElementById('btn-more'),
    dots = document.getElementById('about-dots'),
    more = document.getElementById('about-more');

  moreBtn.addEventListener('click', () => {
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      moreBtn.innerHTML = 'Читать дальше';
      moreBtn.classList.remove('read-more_up');
      more.style.display = 'none';
    } else {
      dots.style.display = 'none';
      moreBtn.innerHTML = 'Скрыть';
      moreBtn.classList.add('read-more_up');
      more.style.display = 'inline';
    }
  });
}