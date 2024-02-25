import axios from 'axios';

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_7DYWCqxuM0hy6sAEqlchb9BZXmhSDMzRJ71wRMCczhFB7QGFFJoQteuyC2q7q3c9';

  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
};
