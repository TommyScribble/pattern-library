import React from 'react';
import Heading from '../objects/Heading';
import SideBar from './SideBar';

const Header = props => {
	return (
		<header>
			<nav className="top-nav">
				<Heading tagNumber={1} headingText={'React UI component library'} />
			</nav>
			<SideBar />
		</header>
	);
};

export default Header;
