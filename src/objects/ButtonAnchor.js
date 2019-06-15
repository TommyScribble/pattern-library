import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonAnchor = props => {
  const { path, anchorClass, disabled, internal } = props;

  console.log('internal', internal);

  let buttonAnchor;

  const handleClick = e => {
    if (disabled) {
      e.preventDefault();
    }
  };

  if (internal) {
    buttonAnchor = (
      <Link
        to={path}
        className={anchorClass}
        disabled={disabled}
        onClick={handleClick}
      >
        {props.children}
      </Link>
    );
  } else {
    buttonAnchor = (
      <a
        href={path}
        className={anchorClass}
        disabled={disabled}
        onClick={handleClick}
      >
        {props.children}
      </a>
    );
  }

  return buttonAnchor;
};

ButtonAnchor.propTypes = {
  path: propTypes.string,
  anchorClass: propTypes.string,
  disabled: propTypes.bool,
  internal: propTypes.bool
};

export default ButtonAnchor;
