import { CastContainer, CastImg, CastItem, CastText } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <CastContainer>
      {cast.map(item => (
        <CastItem key={item.cast_id}>
          <CastImg
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                : 'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg'
            }
            alt={item.character}
          />
          <CastText>{item.original_name}</CastText>
        </CastItem>
      ))}
    </CastContainer>
  );
};
