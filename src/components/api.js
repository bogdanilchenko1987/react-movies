import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '14d9418a13ba1f50c8b95263b7df6dda';

const END_POINT_TRENDING = 'trending/movie/day';
const END_POINT_MOVIES_BY_QUERY = 'search/movie';
const END_POINT_MOVIES_BY_ID = 'movie/';

export const fetchMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}${END_POINT_TRENDING}?api_key=${API_KEY}`
  );
  return response.data;
};

// 'https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1'

export const fetchMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}${END_POINT_MOVIES_BY_QUERY}?query=${query}&api_key=${API_KEY}`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/1125311?language=en-US

export const fetchMoviesById = async id => {
  const response = await axios.get(
    `${BASE_URL}${END_POINT_MOVIES_BY_ID}${id}?api_key=${API_KEY}`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US

export const fetchMoviesCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}${END_POINT_MOVIES_BY_ID}${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMoviesReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}${END_POINT_MOVIES_BY_ID}${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
