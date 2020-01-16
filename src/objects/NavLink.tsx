import React from 'react';
import { Link } from '@reach/router';

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

export default NavLink;
