import {
  ReviewsContainer,
  ReviewsHeader,
  ReviewsItem,
  ReviewsText,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsContainer>
      {reviews.map(item => (
        <ReviewsItem key={item.id}>
          <ReviewsHeader>{item.author}</ReviewsHeader>
          <ReviewsText>{item.content}</ReviewsText>
          {/* <img
              src={`https://image.tmdb.org/t/p/w200${item.author_details.avatar_path}`}
              alt={item.character}
            /> */}
        </ReviewsItem>
      ))}
    </ReviewsContainer>
  );
};
