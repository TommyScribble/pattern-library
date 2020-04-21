import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const NavLink = (props: any) => (
	<Link
		{...props}
		getProps={({ isCurrent }) => {
			return {
				style: {
					backgroundColor: isCurrent ? 'rgba(166, 0, 22, 0.4)' : '#E20016',
				},
			};
		}}
	/>
);

NavLink.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any,
	onClick: PropTypes.func,
};

export default NavLink;
