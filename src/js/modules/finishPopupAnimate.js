export const finishpopupAnimate = popup => {
  const overlay = document.querySelector('.overlay'),
    dataClose = document.querySelectorAll('[data-closed]');

  const popupShow = () => {
    if (window.innerWidth > 992) {
      overlay.classList.remove('fadeOut');
      overlay.classList.add('fadeIn');

      popup.classList.remove('fadeOut');
      popup.classList.add('fadeIn');
    } else {
      popup.classList.remove('hide-mobile');
      popup.classList.add('show-mobile');
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '1';
    } 

    popup.classList.add('is-open');
  };

  const popupClose = e => {
     if (popup.classList.contains('is-open') && (e.type !== 'keydown' || e.keyCode === 27)) {
        if (window.innerWidth > 992) {
          overlay.classList.remove('fadeIn');
          overlay.classList.add('fadeOut');

          popup.classList.remove('fadeIn');
          popup.classList.add('fadeOut');
        } else {
          popup.classList.remove('show-mobile');
          popup.classList.add('hide-mobile');
          overlay.style.visibility = 'hidden';
          overlay.style.opacity = '0';
      } 

        popup.classList.remove('is-open');
      }
   };

  popupShow();

  for (let elem of dataClose) {
    elem.addEventListener('click', popupClose);
  }

  document.addEventListener('keydown', popupClose);
};