import React from 'react';
import Anchor from '../objects/Anchor';

const Navigation = props => {
	return (
		<React.Fragment>
			<li className="side-nav__item">
				<Anchor navigation={true} path={'./'} anchorClass={'side-nav__link'}>
					Homepage
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/buttons'}
					anchorClass={'side-nav__link'}>
					Buttons
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/accordion'}
					anchorClass={'side-nav__link'}>
					Accordion
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor navigation={true} path={'/text'} anchorClass={'side-nav__link'}>
					Text
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/icons'}
					anchorClass={'side-nav__link'}>
					Icons
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/progress-bar'}
					anchorClass={'side-nav__link'}>
					Progress Bar
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/spinner'}
					anchorClass={'side-nav__link'}>
					Spinner
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/tooltip'}
					anchorClass={'side-nav__link'}>
					Tooltip
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/radio'}
					anchorClass={'side-nav__link'}>
					Radio
				</Anchor>
			</li>
			<li className="side-nav__item">
				<Anchor
					navigation={true}
					path={'/checkbox'}
					anchorClass={'side-nav__link'}>
					Checkbox
				</Anchor>
			</li>
		</React.Fragment>
	);
};

export default Navigation;
