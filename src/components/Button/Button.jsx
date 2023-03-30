import PropTypes from 'prop-types';

export default function Button({ children, type }) {
  function handleClick(e) {
    console.log(e);
  }
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};
