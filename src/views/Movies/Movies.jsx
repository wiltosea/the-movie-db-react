import { MovieItem } from '../../components/movieItem/MovieItem';
import { useMovies } from '../../hooks/useMovies';
import styles from './movies.module.scss';

export function Movies() {
  const movies = useMovies();

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
