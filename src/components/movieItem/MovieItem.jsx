import { Link } from 'react-router-dom';
import styles from './movieItem.module.scss';

export function MovieItem({ movie }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <h4>
        <Link to={`movie/${movie.id}`}>Ver Detalhes</Link>
      </h4>
    </div>
  );
}
