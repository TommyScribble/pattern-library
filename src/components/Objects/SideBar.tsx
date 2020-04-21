import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Logo from '../Atoms/Logo';
import Navigation from './Navigation';

type Props = {
	active?: string | boolean;
};

const SideBar = ({ active }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const myLogo = './scribble_logo--white.png';

	useEffect(() => {
		setIsOpen(active === 'Burger1' ? false : true);
	}, [active]);

	const openClass = isOpen === true ? 'js-open' : 'js-close';

	const versionNo = 'Version 1.0.0';

	return (
		<ul className={`side-nav fixed ${openClass}`}>
			<li className="logo">
				<Logo anchor={'./'} logo={myLogo} altText={'Pattern Library 2019'} />
			</li>
			<li className="version">{versionNo}</li>
			<Navigation />
		</ul>
	);
};

SideBar.propTypes = {
	active: PropTypes.string || PropTypes.bool,
};

export default SideBar;
