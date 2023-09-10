import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const loadReviews = () => {
  const renderReviews = arr => {
    const reviewsSwiperWrapper = document.querySelector('.reviews__swiper-wrapper');
    arr.forEach(item => {
      const reviewsSlide = document.createElement('div');
      reviewsSlide.classList.add('reviews__slide');
      reviewsSlide.classList.add('swiper-slide');
      reviewsSlide.innerHTML = `
            <div class="reviews__card">
              <div class="reviews__circle">
                <img src="${item.src}" alt="${item.alt}">
              </div>
              <div class="reviews__card-content">
                <div class="reviews__author">
                  <a href="${item.link}">
                    <svg class="reviews__iconVK">
                      <use xlink:href="./img/icons/icons.svg#iconVk"></use>
                    </svg>
                  </a>
                  ${item.author}
                </div>
                <div class="reviews__left-quote">
                  <svg class="reviews__iconQuote">
                    <use xlink:href="./img/icons/icons.svg#iconQuote"></use>
                  </svg>
                </div>
                <p class="reviews__card-title"> ${item.title}</p>
                <p class="reviews__card-text">
                  ${item.content}
                </p>
             
                <div class="reviews__right-quote">
                  <svg class="reviews__iconQuote reviews__iconQuote_right">
                    <use xlink:href="./img/icons/icons.svg#iconQuote"></use>
                  </svg>
                </div>
              </div>
            </div>
         `;

      reviewsSwiperWrapper.append(reviewsSlide);
    });
  }

  const getData = async url => {
    const res = await fetch(url);
    const data = await res.json();

    for (const i in data[0]) {
      renderReviews(data[0][i]);
    }

    // Reviews slider
    const reviewsSwiper = new Swiper('.reviews__swiper', {
      loop: true,
      speed: 800,
      spaceBetween: 10,
      navigation: {
        nextEl: ".reviews__btn-next",
        prevEl: ".reviews__btn-prev",
      },
    });
  }

  getData('https://kitchen-theme-dda60-default-rtdb.europe-west1.firebasedatabase.app/db.json')
};