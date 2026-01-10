import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const delayMs = Number(event.target.delay.value);
  const state = event.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delayMs);
      } else {
        reject(delayMs);
      }
    }, delayMs);
  });

  promise
    .then(delayMs => {
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delayMs}ms`,
        position: 'topRight',
      });
    })
    .catch(delayMs => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delayMs}ms`,
        position: 'topRight',
      });
    });
});
