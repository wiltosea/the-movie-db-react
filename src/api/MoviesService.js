import axios from 'axios';

const API_KEY = '092359d9c97f9c3506f7647df0f40315';
const BaseUrl = 'https://api.themoviedb.org/3';
const withBaseUrl = (path) => `${BaseUrl}${path}?api_key=${API_KEY}`;

export class MovieService {
  static getMovies() {
    return axios.get(withBaseUrl('/movie/popular'));
  }

  static getMovieDetail(id) {
    return axios.get(withBaseUrl(`/movie/${id}`));
  }
}
