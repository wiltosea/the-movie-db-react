import React, { useEffect, useState } from 'react';
import { MovieService } from '../api/MoviesService';
import { MovieItem } from '../components/MovieItem';

export function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </section>
  );
}
