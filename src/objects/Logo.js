import React from 'react';
import propTypes from 'prop-types';

const Logo = props => {
  const { anchor, logo, altText } = props;

  return (
    <a href={anchor}>
      <img src={logo} alt={altText} />
    </a>
  );
};

Logo.defaultProps = {
  anchor: 'http://',
  altText: 'This is defualt alt text'
};

Logo.propTypes = {
  anchor: propTypes.string,
  logo: propTypes.string,
  altText: propTypes.string
};

export default Logo;
