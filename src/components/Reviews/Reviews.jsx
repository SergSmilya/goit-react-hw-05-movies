import List from 'components/List/List';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiMovReviews } from 'services/Api';

export default function Reviews() {
  const { movId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    apiMovReviews(movId)
      .then(({ data: { results } }) => setReviews(results))
      .catch(error => toast.error(`${error}!`));
  }, [movId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content, url }) => (
            //    зробити окремий комронент
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
              <a href={url}>Original material </a>
            </li>
          ))}
        </List>
      ) : (
        <div>
          <p>There is no description</p>
        </div>
      )}
    </div>
  );
}
