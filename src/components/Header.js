import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  // if no props are passed
  branding: 'My App'
};

Header.propTypes = {
  // proptypes enforce types
  branding: PropTypes.string.isRequired
};

export default Header;
