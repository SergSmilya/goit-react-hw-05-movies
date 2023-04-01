import InputSearch from 'components/InputSearch/InputSearch';
import List from 'components/List/List';
import MovieItemForId from 'components/MovieItemForId/MovieItemForId';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiMovItem } from 'services/Api';

export default function Movies() {
  const [searchFilmArr, setSearchFilmArr] = useState(() => []);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleWriteQueryInput(query) {
    setSearchParams({ query });
  }

  useEffect(() => {
    if (searchParams.get('query') === null) return;
    apiMovItem(searchParams.get('query'))
      .then(({ data: { results } }) => setSearchFilmArr(results))
      .catch(error => console.log(error.request));
  }, [searchParams]);

  console.log(searchFilmArr);

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

      {searchFilmArr.length === 0 && (
        <h2>{`Film with name: ${searchParams.get('query')} not found`}</h2>
      )}
    </div>
  );
}

// import InputSearch from 'components/InputSearch/InputSearch';
// import List from 'components/List/List';
// import MovieItemForId from 'components/MovieItemForId/MovieItemForId';
// import { useEffect, useState } from 'react';
// import { apiMovItem } from 'services/Api';

// export default function Movies() {
//   const [queryInput, setQueryInput] = useState('');
//   const [searchFilmArr, setSearchFilmArr] = useState(() => []);

//   function handleWriteQueryInput(queryIn) {
//     setQueryInput(queryIn);
//   }

//   useEffect(() => {
//     if (queryInput === '') return;
//     apiMovItem(queryInput).then(({ data: { results } }) =>
//       setSearchFilmArr(results)
//     );
//   }, [queryInput]);

//   return (
//     <div>
//       <InputSearch handleWriteQueryInput={handleWriteQueryInput} />

//       {searchFilmArr.length > 0 && (
//         <List>
//           {searchFilmArr.map(({ id, original_title }) => (
//             <MovieItemForId key={id} id={id}>
//               {original_title}
//             </MovieItemForId>
//           ))}
//         </List>
//       )}
//     </div>
//   );
// }
