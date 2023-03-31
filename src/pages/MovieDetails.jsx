import Additional from 'components/Additional/Additional';
import List from 'components/List/List';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { apiMov } from 'services/Api';

export default function Movie() {
  const URL_IMG = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const { movId } = useParams();
  const [movie, setMovie] = useState({});

  const { original_title, overview, genres, backdrop_path } = movie;

  useEffect(() => {
    apiMov(movId)
      .then(({ data }) => setMovie(data))
      .catch(console.log)
      .finally();
  }, [movId]);

  return (
    <div>
      <Link to={backLocation.current}>Go Back</Link>

      {/* Розбити на компоненти */}
      {movie.genres && (
        <div>
          <img src={`${URL_IMG}${backdrop_path}`} alt={original_title}></img>
          <h2>{original_title}</h2>
          <p>{overview}</p>

          <List>
            {genres.map(({ id, name }) => (
              <li key={id} id={id}>
                <p>{name}</p>
              </li>
            ))}
          </List>
        </div>
      )}

      <Additional>Additional information</Additional>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
