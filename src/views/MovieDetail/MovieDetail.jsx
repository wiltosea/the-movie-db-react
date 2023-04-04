import { useEffect, useState } from 'react';
import { MovieService } from '../../api/MoviesService';
import { Link, useParams } from 'react-router-dom';

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
    <section className="movie-detail">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie-excerpt">
        <h3>
          {movie.title} <span>({movie.release_date})</span>
        </h3>
        <p>{movie.overview}</p>
      </div>
      <Link to={`/`}>Voltar</Link>
    </section>
  );
}
