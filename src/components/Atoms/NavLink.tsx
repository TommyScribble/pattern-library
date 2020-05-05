import React from 'react';
import { Link, useLocation } from '@reach/router';
import PropTypes from 'prop-types';

type Props = {
	to: string;
	className?: string;
	onClick?: any;
	children: any;
};

const NavLink = ({ to, className, onClick, children }: Props) => {
	const location = useLocation();
	if (location.pathname === to) className = `${className} current`;

	return (
		<Link to={to} onClick={onClick} className={className}>
			{children}
		</Link>
	);
};

NavLink.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.any.isRequired,
};

export default NavLink;
