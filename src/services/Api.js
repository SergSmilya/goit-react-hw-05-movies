import axios from 'axios';

const API_KEY = 'ad2c844e7719e1ada80161a84523905b';
const URL = 'https://api.themoviedb.org/3';

export async function Api() {
  try {
    return await axios(`${URL}/trending/movie/day?api_key=${API_KEY}`);
  } catch (error) {
    return error;
  }
}

export async function apiMov(movId) {
  try {
    return await axios(`${URL}/movie/${movId}?api_key=${API_KEY}`);
  } catch (error) {
    return error;
  }
}

export async function apiMovItem(movName) {
  try {
    return await axios(
      `${URL}/search/movie?api_key=${API_KEY}&query=${movName}`
    );
  } catch (error) {
    return error;
  }
}

export async function apiMovReviews(movId) {
  try {
    return await axios(`${URL}/movie/${movId}/reviews?api_key=${API_KEY}`);
  } catch (error) {
    return error;
  }
}

export async function apiMovCast(movId) {
  try {
    return await axios(`${URL}/movie/${movId}/credits?api_key=${API_KEY}`);
  } catch (error) {
    return error;
  }
}
