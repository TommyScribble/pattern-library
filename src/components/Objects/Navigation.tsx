import React from 'react';

import Anchor from '../Atoms/Anchor';
import NavData from '../../assets/navigationData.json';

type Data = {
	title: string;
	path: string;
	anchorClass: string;
};

const Navigation: any = () =>
	NavData.map((item: Data, i) => {
		return (
			<li key={i} className="side-nav__item">
				<Anchor
					linkType={'internal'}
					path={item.path}
					anchorClass={item.anchorClass}>
					{item.title}
				</Anchor>
			</li>
		);
	});

export default Navigation;
