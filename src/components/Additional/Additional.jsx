import List from 'components/List/List';
import { Link } from 'react-router-dom';

export default function Additional({ children }) {
  return (
    <div>
      <h3>{children}</h3>
      <List>
        <li>
          <Link to="cast">
            <p>Cast</p>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <p>Reviews</p>
          </Link>
        </li>
      </List>
    </div>
  );
}
