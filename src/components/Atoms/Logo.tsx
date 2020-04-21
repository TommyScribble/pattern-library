import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

type Props = {
	anchor: string;
	logo: string;
	altText: string;
};

const Logo: React.FC<Props> = ({ anchor, logo, altText }: Props) => {
	return (
		<Link to={anchor}>
			<img src={logo} alt={altText} />
		</Link>
	);
};

Logo.propTypes = {
	anchor: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired,
	altText: PropTypes.string.isRequired,
};

export default Logo;
