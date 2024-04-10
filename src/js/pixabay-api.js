export function getDataFromAPI(baseUrl, apiKey, inputValue) {
  const fullUrl = constructUrl(baseUrl, apiKey, inputValue);
  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.log('ERROR:', error);
      return Promise.reject(error);
    });
}

function constructUrl(baseUrl, apiKey, inputValue) {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return `${baseUrl}?${searchParams}`;
}
