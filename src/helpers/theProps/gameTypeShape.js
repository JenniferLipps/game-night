import PropTypes from 'prop-types';

const gameShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export default { gameShape };
