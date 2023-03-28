import axios from 'axios';

const API_KEY = 'ad2c844e7719e1ada80161a84523905b';
const URL = 'https://api.themoviedb.org/3';

export default async function Api() {
  try {
    return await axios(`${URL}/trending/movie/day?api_key=${API_KEY}`);
  } catch (error) {
    return error;
  }
}
