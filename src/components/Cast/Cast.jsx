import { apiMovCast } from 'services/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from 'components/List/List';

export default function Cast() {
  const URL_IMG = 'https://image.tmdb.org/t/p/w200';
  const { movId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    apiMovCast(movId).then(({ data: { cast } }) => setCasts(cast));
  }, [movId]);

  return (
    <div>
      {casts.length > 0 && (
        <List>
          {casts.map(({ id, original_name, character, profile_path }) => (
            //    зробити окремий компонент
            <li key={id}>
              {profile_path && (
                <img
                  src={`${URL_IMG}${profile_path}`}
                  alt={original_name}
                ></img>
              )}
              <h4>{original_name}</h4>
              <p>{character}</p>
            </li>
          ))}
        </List>
      )}
    </div>
  );
}
