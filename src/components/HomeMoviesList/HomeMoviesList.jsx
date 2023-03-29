import HomeMovieItem from 'components/HomeMovieItem/HomeMovieItem';
import { useEffect, useState } from 'react';
import { Api } from 'services/Api';

export default function HomeMoviesList() {
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
      <ul>
        {movies.map(({ id, original_title }) => (
          <HomeMovieItem key={id} id={id}>
            {original_title}
          </HomeMovieItem>
        ))}
      </ul>
    </>
  );
}
