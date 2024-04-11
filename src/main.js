import { getDataFromAPI } from './js/pixabay-api';
import { renderGalleryImg } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/icon-error.svg';

const apiKey = '43227230-2cc9b082dfeccb819f6787c2c';
const baseUrl = 'https://pixabay.com/api/';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper');
const btnLoadMore = document.querySelector('.load-more-btn');

let currentPage = 1;
let limitPageContent = 15;
let currentSearchQuery = null;
let totalContent = null;
let totalPages = null;

searchForm.addEventListener('submit', onSubmitForm);
btnLoadMore.addEventListener('click', onLoadMoreButtonClick);

async function onSubmitForm(e) {
  e.preventDefault();
  galleryEl.innerHTML = '';
  btnLoadMore.classList.add('is-hidden');
  currentPage = 1;

  const inputSearchValue = e.currentTarget.search.value.trim();

  if (!inputSearchValue) {
    displayErrorMessage('Please enter a value in the field!', 'Error');
    e.currentTarget.reset();
    return;
  }

  loaderWrapper.classList.remove('is-hidden');
  await fetchData(
    baseUrl,
    apiKey,
    inputSearchValue,
    currentPage,
    limitPageContent
  );

  e.currentTarget.reset();
}

async function fetchData(
  baseUrl,
  apiKey,
  inputSearchValue,
  page,
  limitPageContent
) {
  try {
    const data = await getDataFromAPI(
      baseUrl,
      apiKey,
      inputSearchValue,
      page,
      limitPageContent
    );
    const formData = data.hits;

    if (formData.length === 0) {
      displayErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    currentSearchQuery = inputSearchValue;
    totalContent = data.totalHits;
    totalPages = Math.ceil(totalContent / limitPageContent);

    renderGalleryImg(galleryEl, formData);

    btnLoadMore.classList.remove('is-hidden');
    smoothScroll();
  } catch (error) {
    displayErrorMessage('Error fetching data. Please try again later', 'Error');
    console.error('Error fetching data:', error);
  } finally {
    loaderWrapper.classList.add('is-hidden');
  }
}

async function onLoadMoreButtonClick() {
  const totalPages = Math.ceil(totalContent / limitPageContent);

  if (currentPage >= totalPages) {
    btnLoadMore.classList.add('is-hidden');
    displayErrorMessage(
      'We are sorry, but you have reached the end of search results',
      'Error'
    );
    return;
  }

  currentPage++;
  loaderWrapper.classList.remove('is-hidden');
  fetchData(baseUrl, apiKey, currentSearchQuery, currentPage, limitPageContent);
}

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const galleryItemHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
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
