import React from 'react';
import propTypes from 'prop-types';

const Button = props => {
	const { type, style, btnClass, btnText } = props;

	return (
		<button type={type} style={style} className={`btn ` + btnClass}>
			{btnText}
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
	style: {
		color: 'white',
		backgroundColor: 'orange',
	},
	btnClass: 'btn-primary',
	btnText: 'Please give me some text',
};

Button.propTypes = {
	type: propTypes.string,
	style: propTypes.object,
	btnClass: propTypes.string,
	btnText: propTypes.string,
};

export default Button;
