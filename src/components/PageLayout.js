import React from 'react';
import Header from './Header';
// import Footer from './Footer';

const PageLayout = props => {
	return (
		<React.Fragment>
			<Header />
			<main className="main-content">{props.children}</main>
		</React.Fragment>
	);
};

export default PageLayout;
