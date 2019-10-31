import React from 'react';
import propTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const Anchor = ({
	path,
	anchorClass,
	disabled,
	internal,
	navigation,
	children,
}) => {
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
				onClick={handleClick}>
				{children}
			</Link>
		);
	} else if (navigation) {
		buttonAnchor = (
			<NavLink
				to={path}
				className={anchorClass}
				disabled={disabled}
				onClick={handleClick}>
				{children}
			</NavLink>
		);
	} else {
		buttonAnchor = (
			<a
				href={path}
				className={anchorClass}
				disabled={disabled}
				onClick={handleClick}>
				{children}
			</a>
		);
	}

	return buttonAnchor;
};

Anchor.propTypes = {
	path: propTypes.string,
	anchorClass: propTypes.string,
	disabled: propTypes.bool,
	internal: propTypes.bool,
	navigation: propTypes.bool,
};

export default Anchor;
