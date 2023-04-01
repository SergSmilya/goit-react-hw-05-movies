import { useState } from 'react';
import Button from 'components/Button/Button';
import PropTypes from 'prop-types';

export default function InputSearch({ handleWriteQueryInput }) {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSabmit(e) {
    e.preventDefault();

    handleWriteQueryInput(e.target.search.value);
    setQuery('');
  }

  return (
    <form
      onSubmit={handleSabmit}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <label style={{ fontStyle: 'italic' }}>
        Search{' '}
        <input
          type="search"
          name="search"
          onChange={handleChange}
          value={query}
          autoFocus
          placeholder="Enter the name of the movie"
        />
      </label>

      <Button type={'submit'}>Search</Button>
    </form>
  );
}

InputSearch.propTypes = {
  handleWriteQueryInput: PropTypes.func.isRequired,
};
