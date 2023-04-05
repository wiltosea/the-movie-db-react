import { Link, useParams } from 'react-router-dom';
import styles from './movieDetail.module.scss';
import useMovieDetail from '../../hooks/useMovieDetail';

export function MovieDetail() {
  const { movieId } = useParams();
  const movie = useMovieDetail(movieId);

  console.log(movie);
  return (
    <section className={styles.movieDetail}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className={styles.movieInfo}>
        <h1>
          {movie.title} <span>({movie.release_date})</span>
        </h1>
        <p>{movie.overview}</p>
        <br />
        <br />
        <br />
        <Link to={`/`}>Voltar</Link>
      </div>
    </section>
  );
}
