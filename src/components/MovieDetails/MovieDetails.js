import {
  BtnDetailsContainer,
  Img,
  MovieDetailsContainer,
  MovieDetailsWrapper,
  StyledBackLink,
  StyledLink,
} from './MovieDetails.styled';

export const MovieDetails = ({ title, src, date, rating, overview }) => {
  return (
    <div>
      <StyledBackLink to={'/'}>⬅ Go back</StyledBackLink>

      <MovieDetailsWrapper>
        <Img src={src} alt={title} />
        <MovieDetailsContainer>
          <h1>Name: {title}</h1>
          <h2>Release date: {date}</h2>
          <h2>Rating: {rating}</h2>
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
