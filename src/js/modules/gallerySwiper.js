import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const gallerySwiper = new Swiper('.gallery__swiper', {
  spaceBetween: 0,
  speed: 800,

  pagination: {
    el: '.gallery-fraction',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
        '<span class="frac-slash"></span>' +
        '<span class="' + totalClass + '"></span>';
    }
  },
  navigation: {
    nextEl: ".gallery-btn-next",
    prevEl: ".gallery-btn-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      slidesPerGroup: 8,

      grid: {
        rows: 2
      }
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,

      grid: {
        rows: 2
      }
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,

      grid: {
        rows: 1
      }
    }
  }
});







