import { Link, useLocation } from 'react-router-dom';

export default function MovieItemForId({ children, id }) {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {children}
      </Link>
    </li>
  );
}
