import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import NavLink from './NavLink';

type Props = {
	path: string;
	anchorClass?: string;
	disabled?: boolean;
	internal?: boolean;
	navigation?: boolean;
	children?: any;
};

const Anchor: React.FC<Props> = ({
	path,
	anchorClass,
	disabled,
	internal,
	navigation,
	children,
}: Props) => {
	let buttonAnchor;

	const handleClick = (e: any) => {
		if (disabled) {
			e.preventDefault();
		}
	};

	if (internal) {
		buttonAnchor = (
			<Link to={path} className={anchorClass} onClick={handleClick}>
				{children}
			</Link>
		);
	} else if (navigation) {
		buttonAnchor = (
			<NavLink to={path} className={anchorClass} onClick={handleClick}>
				{children}
			</NavLink>
		);
	} else {
		buttonAnchor = (
			<a href={path} className={anchorClass} onClick={handleClick}>
				{children}
			</a>
		);
	}

	return buttonAnchor;
};

Anchor.propTypes = {
	path: PropTypes.string.isRequired,
	anchorClass: PropTypes.string,
	internal: PropTypes.bool,
	navigation: PropTypes.bool,
	children: PropTypes.any,
};

export default Anchor;
