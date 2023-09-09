export const toggleMenu = () => {
  const burger = document.querySelector('.burger');

  const handlerMenu = elem => {
    if (!burger.classList.contains('burger_active')) {
      burger.classList.add('burger_active');
    } else if (elem.matches('a') || elem.closest('.burger__icon-cross')) {
      burger.classList.remove('burger_active');
    }
  };

  document.addEventListener('click', e => {
    if (e.target.closest('.burger') || e.target.closest('.header__burger-wrapper')) {
      handlerMenu(e.target);
    }
  });
}