import Additional from 'components/Additional/Additional';
import List from 'components/List/List';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { apiMov } from 'services/Api';
import { CirclesWithBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';

export default function Movie() {
  const URL_IMG = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  const { movId } = useParams();
  const [movie, setMovie] = useState({});

  const {
    original_title,
    overview,
    genres,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  useEffect(() => {
    apiMov(movId)
      .then(({ data }) => setMovie(data))
      .catch(error => toast.error(`${error}!`));
  }, [movId]);

  return (
    <div>
      <Link to={backLocation.current}>Go Back</Link>

      {/* Розбити на компоненти */}
      {movie.genres && (
        <div>
          <img src={`${URL_IMG}${poster_path}`} alt={original_title}></img>
          <h2>
            {original_title}(<span>{new Date(release_date).getFullYear()}</span>
            )
          </h2>

          <p>
            User Score
            <span> {vote_average.toFixed(1) * 10}%</span>
          </p>

          <p>Overview</p>
          <p>{overview}</p>

          <p>Genres</p>
          <List>
            {genres.map(({ id, name }) => (
              <li key={id} id={id}>
                <p>{name}</p>
              </li>
            ))}
          </List>
        </div>
      )}

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
        <Additional>Additional information</Additional>
        <Outlet />
      </Suspense>
    </div>
  );
}
