import InputSearch from 'components/InputSearch/InputSearch';
import List from 'components/List/List';
import MovieItemForId from 'components/MovieItemForId/MovieItemForId';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiMovItem } from 'services/Api';

export default function Movies() {
  const [searchFilmArr, setSearchFilmArr] = useState(() => []);
  const [result, setResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleWriteQueryInput(query) {
    setSearchParams({ query });
  }

  useEffect(() => {
    if (searchParams.get('query') === null) return;
    apiMovItem(searchParams.get('query'))
      .then(({ data: { results, total_results } }) => {
        setSearchFilmArr(results);
        setResult(total_results);
      })
      .catch(error => toast.error(`${error}!`));
  }, [searchParams]);

  return (
    <div>
      <InputSearch handleWriteQueryInput={handleWriteQueryInput} />

      {searchFilmArr.length > 0 && (
        <List>
          {searchFilmArr.map(({ id, original_title }) => (
            <MovieItemForId key={id} id={id}>
              {original_title}
            </MovieItemForId>
          ))}
        </List>
      )}

      {result === 0 && (
        <h2>{`Film with name: ${searchParams.get('query')} not found`}</h2>
      )}
    </div>
  );
}
