import PropTypes from 'prop-types';

const myGameShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  typeId: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  minPlayers: PropTypes.number.isRequired,
  maxPlayers: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { myGameShape };
