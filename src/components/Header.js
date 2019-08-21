import React, { useState } from 'react';
import Heading from '../objects/Heading';
import SideBar from './SideBar';
import Icon from 'react-icon-library';

const Header = () => {
	let [currentIcon, updateIcon] = useState('Burger1');

	const sideBar = document.getElementsByClassName('side-nav');

	let burgerIcon = currentIcon;

	const openCloseNav = () => {
		// This needs to trigger a re-render of ther burgerIcon so needs to refacotr a;ll to use react hooks
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
				<Heading tagNumber={1} headingText={'React UI library'} />
				<button
					className="burger-menu"
					onClick={() => {
						openCloseNav();
						updateIcon(currentIcon === 'Cross1' ? 'Burger1' : 'Cross1');
					}}>
					<Icon iconName={burgerIcon} />
				</button>
			</nav>
			<SideBar />
		</header>
	);
};

export default Header;
