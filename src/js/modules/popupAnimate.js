export const popupAnimate = () => {
  const dataBtns = document.querySelectorAll('[data-popup]');
  if (dataBtns.length === 0) return;

  const overlay = document.querySelector('.overlay'),
    popups = document.querySelectorAll('.popup'),
    dataClose = document.querySelectorAll('[data-closed]');

  const popupShow = popup => {
    if (window.innerWidth > 992) {
      overlay.classList.remove('fadeOut');
      overlay.classList.add('fadeIn');

      popup.classList.remove('fadeOut');
      popup.classList.add('fadeIn');
    }  else {
      popup.classList.remove('hide-mobile');
      popup.classList.add('show-mobile');
      overlay.style.visibility = 'visible';
      overlay.style.opacity = '1';
    } 

    popup.classList.add('is-open');
  };

  const popupClose = e => {
    for (let popupElem of popups) {
      if (popupElem.classList.contains('is-open') && (e.type !== 'keydown' || e.keyCode === 27)) {
        if (window.innerWidth > 992) {
          overlay.classList.remove('fadeIn');
          overlay.classList.add('fadeOut');

          popupElem.classList.remove('fadeIn');
          popupElem.classList.add('fadeOut');
        }  else {
          popupElem.classList.remove('show-mobile');
          popupElem.classList.add('hide-mobile');
          overlay.style.visibility = 'hidden';
          overlay.style.opacity = '0';
      } 

        popupElem.classList.remove('is-open');
      }
    }
  };

  for (let elem of dataBtns) {
    elem.addEventListener('click', () => {
      let popup = document.getElementById(elem.dataset.popup);
      popupShow(popup);
    });
  }

  for (let elem of dataClose) {
    elem.addEventListener('click', popupClose);
  }

  document.addEventListener('keydown', popupClose);
};