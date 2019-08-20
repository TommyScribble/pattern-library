import React from 'react';
import Heading from '../objects/Heading';
import SideBar from './SideBar';
import Icon from 'react-icon-library';

const Header = props => {
	const sideBar = document.getElementsByClassName('side-nav');

	const burgerIcon = '';

	const openNavClass = burgerIcon => {
		if (sideBar[0].classList.contains('js-open')) {
			sideBar[0].classList.remove('js-open');
			sideBar[0].classList.add('js-close');
		} else {
			sideBar[0].classList.remove('js-close');
			sideBar[0].classList.add('js-open');
		}
		return (burgerIcon = sideBar[0].classList.contains('js-open')
			? 'Cross1'
			: 'Burger1');
	};

	return (
		<header>
			<nav className="top-nav">
				<Heading tagNumber={1} headingText={'React UI library'} />
				<button className="burger-menu" onClick={() => openNavClass()}>
					<Icon iconName={'Burger1'} />
				</button>
			</nav>
			<SideBar />
		</header>
	);
};

export default Header;
