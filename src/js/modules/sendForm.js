import { validate } from './validate.js';
import IMask from 'imask';
import { finishpopupAnimate } from './finishPopupAnimate.js';

export const sendForm = id => {
  const errorMessage = 'Что-то пошло не так...';

  const form = document.getElementById(id),
    btnSubmit = form.querySelector('button[type="submit"]'),
    inputs = form.querySelectorAll('input');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `
    display: flex;
    justify-content: center;
  `;

  let nameStatus = false,
    checkedStatus = true,
    phoneStatus = false,
    dateStatus = false;

  const isEmpty = () => {
    const inputs = form.querySelectorAll('input');

    inputs.forEach(item => {
      item.addEventListener('change', e => {
        if (e.target.name === 'user-name') {
          if (e.target.value === '') {
            nameStatus = false;
          } else {
            nameStatus = true;
          }
        } else if (e.target.name === 'date') {
          if (e.target.value === '') {
            dateStatus = false;
          } else {
            dateStatus = true;
          }
        } else if (e.target.type === 'checkbox') {
          if (!e.target.checked) {
            checkedStatus = false;
          } else {
            checkedStatus = true;
          }
        }
      });
    });
  };

  isEmpty();

  document.addEventListener('input', e => {
    if (!e.target.matches('.input_phone') && !e.target.matches('.input_date')) {
      e.target.value = validate(e.target);
    }
  });

  const maskPhone = () => {
    const elems = document.querySelectorAll('[data-mask="phone"]')
    if (!elems) return;

    elems.forEach(phone => {
      const mask = new IMask(phone, {
        mask: "+7(000)000-00-00",
        lazy: false
      })
      phone.addEventListener('input', () => {
        phone.classList.add('input_phone--active');
        if (mask.masked.isComplete) {
          phoneStatus = true;
        } else {
          phoneStatus = false;
        }
      });
    })
  };

  maskPhone();

  const checkBtn = () => {
    if (form.id === 'project-form') {
      if (nameStatus && checkedStatus && phoneStatus && dateStatus) {
        btnSubmit.disabled = false;
        btnSubmit.classList.add('is-active');
      } else {
        btnSubmit.disabled = true;
        btnSubmit.classList.remove('is-active');
      }
    } else {
      if (nameStatus && checkedStatus && phoneStatus) {
        btnSubmit.disabled = false;
        btnSubmit.classList.add('is-active');
      } else {
        btnSubmit.disabled = true;
        btnSubmit.classList.remove('is-active');
      }
    }
  };

  inputs.forEach(item => {
    item.addEventListener('change', () => {
      checkBtn();
    });

    if (window.innerWidth < 993) {
      if (item.matches('.input_date')) {
        item.addEventListener('focus', () => {
          item.type = 'date';
        });

        item.addEventListener('blur', () => {
          item.type = 'text';
          item.placeholder = 'дд.мм.гггг';
        });
      }
    }
  });



  form.addEventListener('submit', e => {
    e.preventDefault();

    form.parentNode.append(statusMessage);

    btnSubmit.classList.remove('active');
    btnSubmit.classList.add('disable');
    btnSubmit.disabled = true;

    statusMessage.innerHTML = `<img class='img-preloader' src='../img/iconLoading.svg'/>`;

    const formData = new FormData(form),
      body = {};

    formData.forEach((key, val) => {
      body[key] = val;
    });


    const popup = document.getElementById(btnSubmit.dataset.finishPopup);

    const postData = async body => {
      try {
        const res = await fetch('server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        if (res.status !== 200) {
          statusMessage.textContent = errorMessage;
          throw new Error('status network is not 200');
        } else {
          /* Hide previous popup */

          if (form.closest('#project-popup')) {
            const parentElem = form.closest('#project-popup');
            parentElem.classList.remove('fadeIn');
            parentElem.classList.remove('is-open');
          }

          statusMessage.textContent = '';
          finishpopupAnimate(popup);
        }
      } catch (err) {
        console.error(err);
      }
    };

    postData(body);

    [...form.elements].forEach(item => item.value = '');
  });
};

