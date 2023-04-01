import { useEffect, useState } from 'react';
import { Api } from 'services/Api';
import List from 'components/List/List';
import MovieItemForId from 'components/MovieItemForId/MovieItemForId';
import { toast } from 'react-toastify';

export default function TrendingMovies() {
  const [movies, setMovies] = useState(() => []);

  useEffect(() => {
    Api()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => toast.error(`${error}!`));
  }, []);

  return (
    <>
      <h2>Trending today</h2>

      <List>
        {movies.map(({ id, original_title }) => (
          <MovieItemForId key={id} id={id}>
            {original_title}
          </MovieItemForId>
        ))}
      </List>
    </>
  );
}
