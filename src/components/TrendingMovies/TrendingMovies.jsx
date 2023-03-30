import { useEffect, useState } from 'react';
import { Api } from 'services/Api';
import List from 'components/List/List';
import MovieItemForId from 'components/MovieItemForId/MovieItemForId';

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  //   const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false)
  // const [visible, setVisible] = useState(true)

  useEffect(() => {
    Api()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(console.log)
      .finally();
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
