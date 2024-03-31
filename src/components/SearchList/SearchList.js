import { Link, useLocation } from 'react-router-dom';
import {
  MovieContainer,
  MovieImg,
  MovieItem,
  MovieText,
  StyledLink,
} from './SearchList.styled';

export const SearchList = ({ submit, movie }) => {
  const location = useLocation();

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
      {Boolean(movie.length) && (
        <StyledLink to={'/movies'} state={{ from: location }}>
          ⬅ Go back
        </StyledLink>
      )}

      {Boolean(movie.length) && (
        <MovieContainer>
          {movie.map(item => (
            <MovieItem key={item.id}>
              <Link
                to={`/movies/${item.id}`}
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

      {!Boolean(movie.length) && (
        <p>No results found. Please type name on the movie</p>
      )}
    </div>
  );
};
