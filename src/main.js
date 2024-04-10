import { getDataFromAPI } from './js/pixabay-api';
import { renderGalleryImg } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/icon-error.svg';

const apiKey = '43227230-2cc9b082dfeccb819f6787c2c';
const baseUrl = 'https://pixabay.com/api/';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper ');

searchForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  galleryEl.innerHTML = '';
  loaderWrapper.classList.remove('is-hidden');

  const inputSearchValue = e.currentTarget.search.value.trim();

  if (!inputSearchValue) {
    displayErrorMessage('Please enter a value in the field!', 'Error');
    e.currentTarget.reset();
    loaderWrapper.classList.add('is-hidden');
    return;
  }

  getDataFromAPI(baseUrl, apiKey, inputSearchValue)
    .then(data => {
      const formData = data.hits;
      if (formData.length === 0) {
        displayErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        loaderWrapper.classList.add('is-hidden');
        return;
      }

      renderGalleryImg(galleryEl, formData);
      loaderWrapper.classList.add('is-hidden');
    })
    .catch(error => {
      displayErrorMessage(
        'Error fetching data. Please try again later',
        'Error'
      );
      console.error('Error fetching data:', error);
    });

  e.currentTarget.reset();
}

const iziToastConfig = {
  position: 'topRight',
  titleColor: '#FFF',
  titleSize: '16',
  titleLineHeight: '24',
  messageColor: '#FFF',
  messageSize: '16',
  messageLineHeight: '24',
};

function displayErrorMessage(message, title) {
  iziToast.error({
    ...iziToastConfig,
    title: title || '',
    message: `${message}`,
    backgroundColor: '#EF4040',
    iconUrl: iconError,
  });
}
