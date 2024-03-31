import { CastList } from 'components/CastList/CastList';
import { fetchMoviesCredits } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CastPage() {
  const [movieItem, setMovieItem] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMoviesCredits(params.movieId);
        setMovieItem(response.cast);
      } catch (error) {
        console.log(error)
      }
    }

    getMovies();
  }, [params.movieId]);



  return (
    <div>
      <CastList cast={movieItem} />
    </div>
  );
}
