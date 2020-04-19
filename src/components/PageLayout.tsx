import React from 'react';
import Header from './Header';
// import Footer from './Footer';

type Props = {
	children: React.ReactElement;
};

const PageLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main className="main-content">
				<section className="section">
					<div className="container">{children}</div>
				</section>
			</main>
		</>
	);
};

export default PageLayout;
