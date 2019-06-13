import React from 'react';
import propTypes from 'prop-types';

const Heading = props => {
  const HeaderTag = `h${props.tagNumber}`;

  return <HeaderTag>{props.headingText}</HeaderTag>;
};

Heading.defaultProps = {
  tagNumber: '1',
  headingText: 'You forgot to add a heading'
};

Heading.propTypes = {
  tagNumber: propTypes.number,
  headingText: propTypes.string
};

export default Heading;
