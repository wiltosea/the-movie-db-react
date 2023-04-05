import { useState, useEffect } from 'react';
import { MovieService } from '../api/MoviesService';

export default function useMovieDetail(movieId) {
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(movieId);
    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return movie;
}
