import PropTypes from 'prop-types';

const userNameShape = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
});

export default { userNameShape };
