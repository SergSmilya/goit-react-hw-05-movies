import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Ul } from './SharedLayout.styled';
import { CirclesWithBar } from 'react-loader-spinner';

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
      <Suspense
        fallback={
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{
              justifyContent: 'center',
            }}
            visible={true}
            outerCircleColor="#0000ff"
            innerCircleColor="#ff0048"
            barColor="#0000ff"
            ariaLabel="circles-with-bar-loading"
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
