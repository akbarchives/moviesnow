import axios from 'axios';

const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;
const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const searchMovie = async q => {
  const movie = await axios.get(q);
  return;
};
