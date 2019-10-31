import React, { useState } from 'react';
import Heading from '../objects/Heading';
import SideBar from './SideBar';
import Icon from 'react-icon-library';

const Header = () => {
	let [currentIcon, updateIcon] = useState('Burger1');

	const sideBar = document.getElementsByClassName('side-nav');

	const openCloseNav = () => {
		if (sideBar[0].classList.contains('js-open')) {
			sideBar[0].classList.remove('js-open');
			sideBar[0].classList.add('js-close');
		} else {
			sideBar[0].classList.remove('js-close');
			sideBar[0].classList.add('js-open');
		}
	};

	return (
		<header>
			<nav className="top-nav">
				<button
					className="burger-menu"
					onClick={() => {
						openCloseNav();
						updateIcon(currentIcon => !currentIcon);
					}}>
					<Icon iconName={currentIcon ? 'Burger1' : 'Cross1'} />
				</button>
				<SideBar />
			</nav>
			<Heading tagNumber={1} headingText={'React UI library'} />
		</header>
	);
};

export default Header;
