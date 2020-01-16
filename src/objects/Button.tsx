import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	type?: 'submit' | 'reset' | 'button';
	style?: React.CSSProperties;
	btnClass?: string;
	children: any;
};

const Button: React.FC<Props> = ({
	type,
	style,
	btnClass,
	children,
}: Props) => {
	return (
		<button type={type} style={style} className={`btn ` + btnClass}>
			{children}
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
	children: 'Please give me some text',
};

Button.propTypes = {
	type: PropTypes.oneOf(['submit', 'reset', 'button']),
	style: PropTypes.object,
	btnClass: PropTypes.string,
	children: PropTypes.any,
};

export default Button;
