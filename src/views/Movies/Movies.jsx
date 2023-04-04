import React, { useEffect, useState } from 'react';
import { MovieService } from '../../api/MoviesService';
import { MovieItem } from '../../components/movieItem/MovieItem';
import styles from './movies.module.scss';

export function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MovieService.getMovies().then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className={styles.main}>
      <section className={styles.moviesList}>
        {movies.map((movie) => (
          <MovieItem movie={movie} />
        ))}
      </section>
    </div>
  );
}
