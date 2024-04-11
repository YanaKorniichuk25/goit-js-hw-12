import axios from 'axios';
export async function getDataFromAPI(
  baseUrl,
  apiKey,
  inputValue,
  page,
  limitPageContent
) {
  const fullUrl = constructUrl(
    baseUrl,
    apiKey,
    inputValue,
    page,
    limitPageContent
  );
  try {
    const { data } = await axios.get(fullUrl);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function constructUrl(baseUrl, apiKey, inputValue, page, limitPageContent) {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: limitPageContent,
  });
  return `${baseUrl}?${searchParams}`;
}
