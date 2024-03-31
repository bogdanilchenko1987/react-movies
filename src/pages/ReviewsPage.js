import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { fetchMoviesReviews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewsPage() {
  const [movieItem, setMovieItem] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMoviesReviews(params.movieId);
        console.log(response.results);
        setMovieItem(response.results);
      } catch (error) {}
    }

    getMovies();
  }, [params.movieId]);

  console.log(movieItem);

  return (
    <div>
      {movieItem.length ? (
        <ReviewsList reviews={movieItem} />
      ) : (
        <p>No reviews found</p>
      )}
    </div>
  );
}
