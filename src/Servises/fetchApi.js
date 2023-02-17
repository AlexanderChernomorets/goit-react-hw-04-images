const URL = 'https://pixabay.com/api/';
const KEY = '32397188-bc9ad69aef35391fe0b27bf18';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

function fetchApi(imageName, page = 1) {
  return fetch(`${URL}?q=${imageName}&page=${page}&key=${KEY}${FILTER}`).then(
    resp => resp.json()
  );
}

export default fetchApi;
