import InputSearch from 'components/InputSearch/InputSearch';
import Item from 'components/Item/Item';
import List from 'components/List/List';
import { useEffect, useState } from 'react';
import { apiMovItem } from 'services/Api';

export default function Movies() {
  const [queryInput, setQueryInput] = useState('');

  function handleWriteQueryInput(queryIn) {
    setQueryInput(queryIn);
  }

  useEffect(() => {
    if (queryInput === '') return;
    apiMovItem(queryInput).then(console.log);
    // return () => {
    //   second
    // }
  }, [queryInput]);

  return (
    <div>
      <InputSearch handleWriteQueryInput={handleWriteQueryInput} />
      <List>
        <Item></Item>
      </List>
    </div>
  );
}
