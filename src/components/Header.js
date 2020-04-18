import React, { useState } from 'react';
import Heading from '../objects/Heading';
import SideBar from './SideBar';
import Icon from 'react-icon-library';

const Header = () => {
	const [icon, updateIcon] = useState('Burger1');

	return (
		<header>
			<nav className="top-nav">
				<Heading tagNumber={1} headingText={'ReactJs UI library'} />
				<button
					className="burger-menu"
					onClick={() => updateIcon(icon === 'Burger1' ? 'Cross1' : 'Burger1')}>
					<Icon iconName={icon} />
				</button>
			</nav>
			<SideBar active={icon} />
		</header>
	);
};

export default Header;
