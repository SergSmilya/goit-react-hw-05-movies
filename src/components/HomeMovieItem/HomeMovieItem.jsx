import { Link } from 'react-router-dom';

export default function HomeMovieItem({ children, id }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>{children}</Link>
    </li>
  );
}

// В место <p></p> должен біть <Link to...>