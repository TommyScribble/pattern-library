import React from 'react';
import propTypes from 'prop-types';
import { Link } from '@reach/router';

const Logo = props => {
	const { anchor, logo, altText } = props;

	return (
		<Link to={anchor}>
			<img src={logo} alt={altText} />
		</Link>
	);
};

Logo.defaultProps = {
	anchor: '/',
	altText: 'This is defualt alt text - please update me',
};

Logo.propTypes = {
	anchor: propTypes.string,
	logo: propTypes.string,
	altText: propTypes.string,
};

export default Logo;
