import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import NavLink from './NavLink';

type Props = {
	path: string;
	anchorClass?: string;
	disabled?: boolean;
	linkType?: string;
	children?: any;
};

const Anchor: React.FC<Props> = ({
	path,
	anchorClass,
	disabled,
	linkType,
	children,
}: Props) => {
	let buttonAnchor;

	const handleClick = (e: any) => {
		if (disabled) {
			e.preventDefault();
		}
	};

	switch (linkType) {
		case 'internal':
			buttonAnchor = (
				<Link to={path} className={anchorClass} onClick={handleClick}>
					{children}
				</Link>
			);
			break;
		case 'navigation':
			buttonAnchor = (
				<NavLink to={path} className={anchorClass} onClick={handleClick}>
					{children}
				</NavLink>
			);
			break;
		default:
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
	linkType: PropTypes.string,
	children: PropTypes.any,
};

export default Anchor;
