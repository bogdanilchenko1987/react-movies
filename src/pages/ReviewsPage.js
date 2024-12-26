import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { fetchMoviesReviews } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ReviewsPage() {
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await fetchMoviesReviews(params.movieId);
        setMovieItem(response.results);
      } catch (error) {}
    }

    getMovies();
  }, [params.movieId]);

  return (
    <div>
      {isLoading && movieItem.length ? (
        <ReviewsList reviews={movieItem} />
      ) : (
        <p>No Reviews found</p>
      )}
    </div>
  );
}
