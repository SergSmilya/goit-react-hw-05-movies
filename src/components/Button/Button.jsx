import PropTypes from 'prop-types';

export default function Button({ children, type }) {
  return (
    <button style={{ fontStyle: 'italic' }} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};
