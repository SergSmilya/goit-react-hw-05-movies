import { Link } from 'react-router-dom';

export default function MovieItemForId({ children, id }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>{children}</Link>
    </li>
  );
}
