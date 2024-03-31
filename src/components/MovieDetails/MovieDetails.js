// import { useLocation } from 'react-router-dom';
import {
  BtnDetailsContainer,
  Img,
  MovieDetailsContainer,
  MovieDetailsWrapper,
  StyledBackLink,
  StyledLink,
} from './MovieDetails.styled';

export const MovieDetails = ({ title, src, date, rating, overview, link }) => {
  // const location = useLocation();

  return (
    <div>
      {/* <StyledBackLink to={link} state={{ from: location }}>
        ⬅ Go back
      </StyledBackLink> */}

      <StyledBackLink to={link}>⬅ Go back</StyledBackLink>

      <MovieDetailsWrapper>
        <Img src={src} alt={title} />
        <MovieDetailsContainer>
          <h2>Name: {title}</h2>
          <h3>Release date: {date}</h3>
          <h3>Rating: {rating}</h3>
          <h3>Overview:</h3>
          <p>{overview}</p>
        </MovieDetailsContainer>
      </MovieDetailsWrapper>

      <BtnDetailsContainer>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </BtnDetailsContainer>
    </div>
  );
};
