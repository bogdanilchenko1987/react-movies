import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { fetchMoviesById } from 'components/api';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movieItem, setMovieItem] = useState([]);
  const params = useParams();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';
  // console.log(params.movieId);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMoviesById(params.movieId);
        console.log(response);
        setMovieItem(response);
      } catch (error) {}
    }

    getMovies();
  }, [params.movieId]);

  console.log(movieItem);

  return (
    <div>
      {/* <Link
        to={backLinkHref}
        style={{
          color: 'black',
          fontWeight: '700',
        }}
      >
        Back to Products
      </Link> */}
      <MovieDetails
        title={movieItem.title}
        src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
        date={movieItem.release_date}
        rating={movieItem.vote_average}
        overview={movieItem.overview}
      />

      <Outlet />
    </div>
  );
}
