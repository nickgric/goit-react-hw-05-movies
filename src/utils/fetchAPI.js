import axios from 'axios';

const API_KEY = '020befa6f5b3204d9cdfb69cb3fae25a';
const BASE_URL = 'https://api.themoviedb.org/3/';

// get popular films for main page
// https://developers.themoviedb.org/3/trending/get-trending
export const fetchTrending = async page => {
  try {
    const response = await axios(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// search films by name
// https://developers.themoviedb.org/3/search/search-movies
export const fetchSearch = async (query, page) => {
  try {
    const response = await axios(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// get film info
// https://developers.themoviedb.org/3/movies/get-movie-details
export const fetchMovie = async id => {
  try {
    const response = await axios(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// get film actors
// https://developers.themoviedb.org/3/movies/get-movie-credits
export const fetchActors = async id => {
  try {
    const response = await axios(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

// get film reviews
// https://developers.themoviedb.org/3/movies/get-movie-reviews
export const fetchReviews = async (id, page) => {
  try {
    const response = await axios(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
