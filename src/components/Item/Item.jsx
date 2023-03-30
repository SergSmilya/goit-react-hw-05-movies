import { Link } from 'react-router-dom';

export default function Item({ children, id }) {
  return (
    <li>
      <Link to={`/movies/${id}`}>{children}</Link>
    </li>
  );
}
