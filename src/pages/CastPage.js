import { CastList } from 'components/CastList/CastList';
import { fetchMoviesCredits } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CastPage() {
  const [movieItem, setMovieItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMoviesCredits(params.movieId);
        setMovieItem(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    }

    getMovies();
  }, [params.movieId]);

  return (
    <div>
      {Boolean(movieItem.length) && <CastList cast={movieItem} />}
      {isLoading && <p>No Actors found</p>}
    </div>
  );
}
