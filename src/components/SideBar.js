import React from 'react';
import myLogo from '../assets/scribble_logo--white.png';
import Logo from './../objects/Logo';
import Navigation from './Navigation';

const SideBar = props => {
	const versionNo = 'Version 1.0.0';

	return (
		<ul className="side-nav fixed js-close">
			<li className="logo">
				<Logo anchor={'./'} logo={myLogo} altText={'Pattern Library 2019'} />
			</li>
			<li className="version">{versionNo}</li>
			<Navigation />
		</ul>
	);
};

export default SideBar;
