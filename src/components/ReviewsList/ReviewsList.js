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
        </ReviewsItem>
      ))}
    </ReviewsContainer>
  );
};
