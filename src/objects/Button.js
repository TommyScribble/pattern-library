import React from 'react';
import propTypes from 'prop-types';

const defaultStyle = {
  color: 'white',
  backgroundColor: 'orange'
};

const Button = props => {
  const { type, style, btnClass, btnText } = props;

  console.log('PROPS', props);

  return (
    <button type={type} style={defaultStyle} className={`btn ` + btnClass}>
      {btnText}
    </button>
  );
};

Button.defualtProps = {
  type: 'button',
  btnClass: 'btn-primary',
  btnText: 'Please give me some text'
};

Button.propTypes = {
  type: propTypes.string,
  style: propTypes.string,
  btnClass: propTypes.string,
  btnText: propTypes.string
};

export default Button;
