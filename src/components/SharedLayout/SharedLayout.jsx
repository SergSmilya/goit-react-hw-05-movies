import { NavLink, Outlet } from 'react-router-dom';
import { Ul } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <div>
      <header>
        <nav>
          <Ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </Ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
