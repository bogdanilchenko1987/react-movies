import { SearchList } from 'components/SearchList/SearchList';
import { fetchMoviesByQuery } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movie, setmovie] = useState([]);
  const [params, setParams] = useSearchParams();

  const movieName = params.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const movieName = e.target.input.value;
    params.set('query', movieName);
    setParams(params);
  };

  const resetInput = e => {
    e.target.input.value = '';
  };

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchMoviesByQuery(movieName);
        console.log(response.results);
        setmovie(response.results);
      } catch (error) {}
    }
    getMovies();
  }, [movieName]);

  return (
    <div>
      <SearchList
        movie={movie}
        submit={e => {
          handleSubmit(e);
          resetInput(e);
        }}
      />
    </div>
  );
}
