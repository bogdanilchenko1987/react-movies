import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { lazy } from 'react';
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));

export const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<div>404 Not found</div>} />
        </Route>
      </Routes>
    </main>
  );
};
