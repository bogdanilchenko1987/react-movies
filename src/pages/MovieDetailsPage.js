import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMoviesById } from 'components/api';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movieItem, setMovieItem] = useState([]);
  const params = useParams();
  const location = useLocation();
  const ref = useRef(location);

  const backLinkHref = ref.current.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMoviesById(params.movieId);
        setMovieItem(response);
      } catch (error) {
        console.log(error)
      }
    }

    getMovies();
  }, [params.movieId]);

  return (
    <div>
      <MovieDetails
        link={backLinkHref}
        title={movieItem.title}
        src={
          movieItem.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`
            : 'https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg'
        }
        date={movieItem.release_date}
        rating={movieItem.vote_average}
        overview={movieItem.overview}
      />

      <Outlet />
    </div>
  );
}
