import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MovieContainer,
  MovieImg,
  MovieItem,
  MovieText,
} from './SearchList.styled';

export const SearchList = ({ submit, movie, isLoading }) => {
  const location = useLocation();
  const isListEmpty = Boolean(movie.length);
  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <b>LOADING...</b>}
      {isListEmpty && (
        <MovieContainer>
          {movie.map(item => (
            <MovieItem key={item.id}>
              <Link
                to={`/movies/${item.id}`}
                state={{ from: location }}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MovieImg
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w342/${item.poster_path}`
                      : 'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg'
                  }
                  alt={item.title}
                />

                <MovieText>{item.title}</MovieText>
              </Link>
            </MovieItem>
          ))}
        </MovieContainer>
      )}

      {!isListEmpty && <p>Please type name on the movie</p>}
    </div>
  );
};

SearchList.propTypes = {
  movie: PropTypes.array.isRequired,
  submit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
