import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchMovies } from 'components/api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [moviesItem, setMoviesItem] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMovies();
        const moviesTranding = response.results;
        setMoviesItem(moviesTranding);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      <MoviesList movies={moviesItem} />
    </div>
  );
}
