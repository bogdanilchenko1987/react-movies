import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';

import MoviesPage from 'pages/MoviesPage';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<div>cast</div>} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
