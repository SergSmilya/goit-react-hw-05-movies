import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiMov } from 'services/Api';

export default function Movie() {
  const { movId } = useParams();
  const [movie, setMovie] = useState({});

  const { original_title, overview, genres, poster_path } = movie;

  useEffect(() => {
    apiMov(movId)
      .then(({ data }) => setMovie(data))
      .catch(console.log)
      .finally();
  }, [movId]);

  return (
    <div>
      <Button type={'button'}>Go Back</Button>

      {/* Розбити на компоненти */}
      {movie.genres && (
        <div>
          {/* img не працює том що не так прописан шлях до постера */}
          <img src={poster_path} alt={original_title}></img>
          <h2>{original_title}</h2>
          <p>{overview}</p>

          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
