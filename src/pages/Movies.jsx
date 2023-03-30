import InputSearch from 'components/InputSearch/InputSearch';
import Item from 'components/Item/Item';
import List from 'components/List/List';
import { useEffect, useState } from 'react';
import { apiMovItem } from 'services/Api';

export default function Movies() {
  const [queryInput, setQueryInput] = useState('');
  const [searchFilmArr, setSearchFilmArr] = useState([]);

  function handleWriteQueryInput(queryIn) {
    setQueryInput(queryIn);
  }

  useEffect(() => {
    if (queryInput === '') return;
    apiMovItem(queryInput).then(({ data: { results } }) =>
      setSearchFilmArr(results)
    );
  }, [queryInput]);

  return (
    <div>
      <InputSearch handleWriteQueryInput={handleWriteQueryInput} />

      {searchFilmArr.length > 0 && (
        <List>
          {searchFilmArr.map(({ id, original_title }) => (
            <Item key={id} id={id}>
              {original_title}
            </Item>
          ))}
        </List>
      )}
    </div>
  );
}
