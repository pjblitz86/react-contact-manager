import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div>
      {/* <h1 style={{ color: 'red', fontSize: '50px' }}>{props.branding}</h1> */}{' '}
      {/* inline styling example */}
      <h1 style={headingStyle}>{props.branding}</h1>
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

const headingStyle = {
  //
  color: 'blue',
  fontSize: '50px'
};

export default Header;
