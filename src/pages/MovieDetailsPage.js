import { NavLink, Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  return (
    <div>
      <p>MovieDetails</p>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <NavLink to="cast">cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
