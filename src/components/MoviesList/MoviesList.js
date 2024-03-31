import { Link } from 'react-router-dom';
import {
  MovieContainer,
  MovieImg,
  MovieItem,
  MovieText,
} from './MovieList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={`/movies/${movie.id}`}
          >
            <MovieImg
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieText>{movie.original_title}</MovieText>
          </Link>
        </MovieItem>
      ))}
    </MovieContainer>
  );
};
