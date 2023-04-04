import { useEffect, useState } from 'react';
import { MovieService } from '../../api/MoviesService';
import { Link, useParams } from 'react-router-dom';
import styles from './movieDetail.module.scss';

export function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const getMovie = async () => {
    const { data } = await MovieService.getMovieDetail(movieId);
    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
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
